import { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const carrosel_img = [
  "/imagens-estaticas/img_car001.jpg",
  "/imagens-estaticas/img_car002.jpg",
  "/imagens-estaticas/img_car003.jpg",
  "/imagens-estaticas/img_car004.jpg"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carrosel_img.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carrosel_img.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carrosel_img.length) % carrosel_img.length);
  };

  
    return (
  <div style={styles.container}>
    <Header></Header>
    
    <section style={styles.carouselContainer}>
      
      <div 
        style={{ 
          ...styles.carouselSlider, 
          transform: `translateX(-${currentSlide * 100}%)` 
        }}
      >
        {carrosel_img.map((url, index) => (
          <div 
            key={index} 
            style={{ ...styles.slide, backgroundImage: `url(${url})` }}
          />
        ))}
      </div>

      
      <div style={styles.overlay}>
        <h1 style={styles.title}>Estilo e Tradição para o seu Visual</h1>
        <p style={styles.subtitle}>Escolha seu profissional, escolha seu horário e evite filas.</p>
        <button style={styles.heroButton}>Ver Cortes Disponíveis</button>
      </div>

      {/* CONTROLES DO CARROSSEL */}
      <button onClick={prevSlide} style={{ ...styles.arrowButton, left: '20px' }}>❮</button>
      <button onClick={nextSlide} style={{ ...styles.arrowButton, right: '20px' }}>❯</button>

      <div style={styles.dotsContainer}>
        {carrosel_img.map((_, index) => (
          <span 
            key={index} 
            onClick={() => setCurrentSlide(index)}
            style={{ 
              ...styles.dot, 
              backgroundColor: currentSlide === index ? '#fff' : 'rgba(255,255,255,0.5)' 
            }}
          />
        ))}
      </div>
    </section>

    <Footer></Footer>
  </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#111', color: '#fff' },
  carouselContainer: { position: 'relative', width: '100%', height: '75vh', overflow: 'hidden', backgroundColor: '#111' },
  carouselSlider: { display: 'flex', width: '100%', height: '100%', transition: 'transform 0.5s ease-in-out' },
  slide: {minWidth: '100%', height: '100%',backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#111111', position: 'relative' },
  overlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' },
  title: { fontSize: '42px', marginBottom: '10px', color: '#fff', fontFamily: 'Arial, sans-serif' },
  subtitle: { fontSize: '18px', marginBottom: '30px', color: '#ccc', fontFamily: 'Arial, sans-serif' },
  heroButton: { backgroundColor: 'transparent', color: '#d4af37', border: '2px solid #d4af37', padding: '12px 25px', fontSize: '16px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' },
  arrowButton: { position: 'absolute', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', padding: '15px', cursor: 'pointer', fontSize: '18px', borderRadius: '50%', zIndex: 10 },
  dotsContainer: { position: 'absolute', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', zIndex: 10 },
  dot: { width: '12px', height: '12px', borderRadius: '50%', cursor: 'pointer', transition: '0.3s' }
};