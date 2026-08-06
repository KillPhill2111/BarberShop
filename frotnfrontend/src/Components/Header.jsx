import { useState, useEffect } from 'react'

export default function Header(){

    return(
        <header style={styles.header}>
      
      <div style={styles.logo}>
        <span>💈</span> BarberShop
      </div>

      
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Início</a>
        <a href="#cortes" style={styles.navLink}>Cortes & Serviços</a>
        <a href="#sobre" style={styles.navLink}>A Barbearia</a>
        <a href="#erp" style={styles.navLink}>Área Restrita</a>
      </nav>

      
      <div>
        <button style={styles.ctaButton}>Agendar Horário</button>
      </div>
    </header>
    )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#161616', // Um cinza bem escuro para contrastar com o fundo preto
    borderBottom: '1px solid #262626', // Linha sutil divisória
    position: 'sticky', // Faz o menu ficar fixo no topo ao rolar a página
    top: 0,
    zIndex: 1000, // Garante que o menu fique por cima do carrossel
    fontFamily: 'Arial, sans-serif'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#d4af37', // Tom dourado clássico
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  nav: {
    display: 'flex',
    gap: '30px'
  },
  navLink: {
    color: '#cccccc',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease'
  },
  ctaButton: {
    backgroundColor: '#d4af37',
    color: '#000000',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textTransform: 'uppercase'
  }
};