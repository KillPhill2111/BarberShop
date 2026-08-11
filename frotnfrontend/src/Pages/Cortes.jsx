import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';       
import CortesCard from '../Components/CortesCard'; // Importa o componente do card que foi criado

const Cortes = () => {
  const [listaServicos, setListaServicos] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  
  const categorias = [
    'Todos', 
    'Estilos com degradê', 
    'Estilos Modernos', 
    'Estilos Ousados', 
    'Barba', 
    'Estética', 
    'Combos'
  ];

  useEffect(() => {
    setLoading(true);
    
    
    const endpoint = categoriaAtiva === 'Todos' 
      ? 'http://localhost:5265/api/servicos'
      : `http://localhost:5265/api/servicos/estilo/${encodeURIComponent(categoriaAtiva)}`;

    fetch(endpoint)
      .then((resposta) => {
        if (!resposta.ok) throw new Error('Não foi possível carregar os serviços.');
        return resposta.json();
      })
      .then((dados) => {
        setListaServicos(dados);
        setLoading(false);
      })
      .catch((err) => {
        setErro(err.message);
        setLoading(false);
      });
  }, [categoriaAtiva]);

  const handleAgendamento = (servico) => {
    alert(`Você selecionou: ${servico.nome}. Próximo passo: agendar profissional e horário!`);
  };

  return (
    <>
      <Header /> 

      <div style={styles.container}>
        <header style={styles.header}>
          <h1>💈 Escolha seu Estilo e Serviço</h1>
          <p>Navegue entre nossos cortes de cabelo, cuidados com a barba e combos.</p>
        </header>

        {/* Abas de Filtro por Categoria */}
        <div style={styles.abasContainer}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              style={{
                ...styles.abaBotao,
                backgroundColor: categoriaAtiva === cat ? '#1a1a1a' : '#f0f0f0',
                color: categoriaAtiva === cat ? '#fff' : '#333',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Listagem Dinâmica dos Cards consumindo o componente CorteCard */}
        {loading ? (
          <div style={styles.aviso}>Carregando catálogo de serviços...</div>
        ) : erro ? (
          <div style={styles.erro}>Erro ao conectar com a API: {erro}</div>
        ) : (
          <div style={styles.grid}>
            {listaServicos.map((servico) => (
              
              <CortesCard 
                key={servico.id} 
                corte={servico} 
                onSelecionar={handleAgendamento} 
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};


const styles = {
  container: { 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '20px', 
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',        // Garante que o fundo escuro ocupe a tela toda
    backgroundColor: '#111',   // O mesmo fundo preto/cinza escuro da Home
    color: '#fff'              // Texto principal em branco
  },
  header: { 
    textAlign: 'center', 
    marginBottom: '30px' 
  },
  abasContainer: { 
    display: 'flex', 
    gap: '10px', 
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    marginBottom: '30px' 
  },
  abaBotao: { 
    padding: '10px 18px', 
    border: 'none', 
    borderRadius: '20px', 
    cursor: 'pointer', 
    fontWeight: 'bold', 
    fontSize: '0.9rem', 
    transition: 'all 0.2s' 
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
    gap: '24px' 
  },
  aviso: { 
    textAlign: 'center', 
    marginTop: '40px', 
    fontSize: '1.2rem', 
    color: '#ccc' 
  },
  erro: { 
    textAlign: 'center', 
    marginTop: '40px', 
    color: '#ff4a4a', 
    fontSize: '1.1rem' 
  }
};
export default Cortes;
