

export default function Footer(){
 const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        
        {/* Coluna 1: Sobre / Logo */}
        <div style={styles.column}>
          <h3 style={styles.logo}>💈 BarberShop</h3>
          <p style={styles.text}>
            Tradição, estilo e excelência em atendimento desde 2026. O lugar ideal para o homem moderno cuidar do seu visual.
          </p>
        </div>

        {/* Coluna 2: Endereço e Contato */}
        <div style={styles.column}>
          <h4 style={styles.title}>📍 Onde Estamos</h4>
          <p style={styles.text}>Avenida dos Cabeleireiros, 1000</p>
          <p style={styles.text}>Bairro Centro — Cidade Fictícia / SP</p>
          <p style={styles.text}>📞 (11) 99999-8888</p>
          <p style={styles.text}>✉️ contato@barbershop.com</p>
        </div>

        {/* Coluna 3: Horários */}
        <div style={styles.column}>
          <h4 style={styles.title}>⏰ Horário de Funcionamento</h4>
          <p style={styles.text}>Terça a Sexta: 09h às 20h</p>
          <p style={styles.text}>Sábado: 08h às 19h</p>
          <p style={styles.text} styles={{ ...styles.text, color: '#ff4d4d' }}>Domingo e Segunda: Fechado</p>
        </div>

        {/* Coluna 4: Redes Sociais Simuladas */}
        <div style={styles.column}>
          <h4 style={styles.title}>📱 Siga-nos</h4>
          <div style={styles.socialContainer}>
            <a href="#instagram" style={styles.socialIcon}>📸 Instagram</a>
            <a href="#facebook" style={styles.socialIcon}>👥 Facebook</a>
          </div>
        </div>

      </div>

      {/* Barra de Direitos Autorais */}
      <div style={styles.copyright}>
        <p>&copy; {currentYear} BarberShop. Todos os direitos reservados.</p>
        <p style={styles.subCopyright}>Desenvolvido para portfólio profissional</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#161616', // Mesma cor escura do Header para manter a harmonia
    color: '#ffffff',
    padding: '60px 40px 20px 40px',
    fontFamily: 'Arial, sans-serif',
    borderTop: '1px solid #262626',
    marginTop: 'auto' // Ajuda a empurrar o footer para baixo se a página for curta
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBottom: '40px',
    borderBottom: '1px solid #262626'
  },
  column: {
    flex: '1',
    minWidth: '220px'
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#d4af37',
    marginBottom: '15px'
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#d4af37',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  text: {
    color: '#aaaaaa',
    fontSize: '14px',
    lineHeight: '1.6',
    margin: '6px 0'
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  socialIcon: {
    color: '#aaaaaa',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s',
    cursor: 'pointer'
  },
  copyright: {
    textAlign: 'center',
    paddingTop: '20px',
    color: '#666666',
    fontSize: '13px'
  },
  subCopyright: {
    fontSize: '11px',
    color: '#444444',
    marginTop: '5px'
  }
};