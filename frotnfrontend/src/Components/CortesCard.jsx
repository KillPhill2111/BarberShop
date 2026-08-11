import React from 'react';

const CortesCard = ({ corte, onSelecionar }) => {
  // Formata o valor decimal do C# para a moeda brasileira (R$)
  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(corte.preco);

  // Tratamento para imagens: substitui caminhos relativos quebrados por fotos reais de barbearia
  const imagemValida = corte.imagemUrl 
  ? `http://localhost:5265${corte.imagemUrl}`
  : 'https://unsplash.com';

  return (
    <div style={styles.card}>
      <img src={imagemValida} alt={corte.nome} style={styles.imagem} />
      
      <div style={styles.infoContainer}>
        {/* Exibe a Categoria vinda do seu back-end (Ex: Estilos com degradê) */}
        <span style={styles.tag}>{corte.categoria}</span>
        
        <h3 style={styles.titulo}>{corte.nome}</h3>
        
        <div style={styles.detalhes}>
          {/* Lendo a propriedade TempoEmMinutos definida no seu modelo do .NET */}
          <span style={styles.tempo}>⏱ {corte.tempoEmMinutos} min</span>
          <span style={styles.preco}>{precoFormatado}</span>
        </div>

        <button onClick={() => onSelecionar(corte)} style={styles.botao}>
          Agendar Serviço
        </button>
      </div>
    </div>
  );
};


const styles = {
  card: { 
    border: '1px solid #e0e0e0', 
    borderRadius: '12px', 
    overflow: 'hidden', 
    backgroundColor: '#fff', 
    display: 'flex', 
    flexDirection: 'column', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s'
  },
  imagem: { 
    width: '100%', 
    height: '180px', 
    objectFit: 'cover' 
  },
  infoContainer: { 
    padding: '16px', 
    display: 'flex', 
    flexDirection: 'column', 
    flexGrow: 1 
  },
  tag: { 
    alignSelf: 'flex-start', 
    backgroundColor: '#f0f0f0', 
    color: '#666', 
    fontSize: '0.75rem', 
    fontWeight: 'bold', 
    padding: '4px 8px', 
    borderRadius: '4px', 
    marginBottom: '8px', 
    textTransform: 'uppercase' 
  },
  titulo: { 
    margin: '0 0 16px 0', 
    fontSize: '1.2rem', 
    color: '#1a1a1a', 
    fontWeight: '700' 
  },
  detalhes: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: '20px', 
    fontWeight: 'bold' 
  },
  tempo: { 
    color: '#666', 
    fontSize: '0.9rem' 
  },
  preco: { 
    color: '#1a1a1a', 
    fontSize: '1.1rem' 
  },
  botao: { 
    backgroundColor: '#1a1a1a', 
    color: '#fff', 
    border: 'none', 
    padding: '12px', 
    borderRadius: '6px', 
    cursor: 'pointer', 
    fontWeight: 'bold', 
    letterSpacing: '0.5px'
  }
};

export default CortesCard;
