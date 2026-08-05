import { useEffect, useState } from 'react'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div style={styles.page}>
      <section style={styles.banner}>
        <img
          src="https://images.pexels.com/photos/149483/pexels-photo-149483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Praia tropical ao pôr do sol"
          style={styles.image}
        />
        <div style={styles.overlay} />
        <div
          style={{
            ...styles.content,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p style={styles.topText}>Estaremos encerrados de 10 a 15 de Agosto</p>
          <h1 style={styles.bottomText}>Boas Férias</h1>
        </div>
      </section>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    margin: 0,
    padding: 0,
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    background: '#0d1b2a',
    minHeight: '100vh',
  },
  banner: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#ffffff',
    padding: '0 24px',
    transition: 'opacity 1s ease, transform 1s ease',
  },
  topText: {
    margin: 0,
    fontSize: 'clamp(1.25rem, 3vw, 2rem)',
    fontWeight: 400,
    letterSpacing: '0.5px',
    textShadow: '0 2px 12px rgba(0,0,0,0.6)',
    lineHeight: 1.5,
  },
  bottomText: {
    margin: '24px 0 0',
    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
    fontWeight: 700,
    letterSpacing: '2px',
    textShadow: '0 4px 24px rgba(0,0,0,0.7)',
    lineHeight: 1.1,
  },
}

export default App
