import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <section style={{ marginBottom: 48, textAlign: 'center', display:'grid' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 16px 0', color: 'var(--text-primary)' }}>
          🔗 Acortador de URL
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 2 }}>
          La forma más simple y rápida de crear URLs cortas
        </p>
      </section>

      <section className="card" style={{ marginBottom: 32 }}>
        <h2 style={{ margin: '0 0 12px 0', fontSize: '1.25rem' }}>¿Qué es?</h2>
        <p style={{ margin: 0, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Acortador de URL</strong> es una aplicación web que te permite
          transformar URLs largas y complicadas en códigos cortos y fáciles de compartir. Perfecto para redes sociales,
          mensajes, chats y cualquier lugar donde necesites una URL limpia y compacta.
        </p>
      </section>

      <section className="card" style={{ marginBottom: 32 }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '1.25rem' }}>✨ Características</h2>
        <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: 12 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Generación Rápida:</strong> Crea una URL corta en segundos
          </li>
          <li style={{ marginBottom: 12 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Códigos Únicos:</strong> Cada URL corta tiene un código único e irrepetible
          </li>
          <li style={{ marginBottom: 12 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Copia Fácil:</strong> Copia al portapapeles con un clic
          </li>
          <li style={{ marginBottom: 12 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Búsqueda Rápida:</strong> Accede a tus URLs solo con el código
          </li>
          <li style={{ marginBottom: 12 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Sin Registros:</strong> No necesitas crear cuenta. Totalmente anónimo
          </li>
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Sin Límites:</strong> Acorta todas las URLs que quieras
          </li>
        </ul>
      </section>

      <section className="card" style={{ marginBottom: 32 }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '1.25rem' }}>🚀 Cómo Usar</h2>
        <div style={{ display: 'grid', gap: 16, color: 'var(--text-secondary)' }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: 'var(--cyan)' }}>Opción 1: Acortar una URL</h3>
            <ol style={{ margin: 0, paddingLeft: 20 }}>
              <li>Haz clic en "Generar URL Corta"</li>
              <li>Pega tu URL larga</li>
              <li>Haz clic en "Generar"</li>
              <li>¡Copia y comparte tu URL corta!</li>
            </ol>
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: 'var(--sky)' }}>Opción 2: Buscar una URL</h3>
            <ol style={{ margin: 0, paddingLeft: 20 }}>
              <li>En la página principal, ingresa el código</li>
              <li>Haz clic en "Ir a la URL"</li>
              <li>¡Serás redirigido automáticamente!</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="card" style={{ marginBottom: 32 }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '1.25rem' }}>💡 Casos de Uso</h2>
        <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: 8 }}>📱 Compartir en redes sociales (Twitter, TikTok, Instagram)</li>
          <li style={{ marginBottom: 8 }}>💬 Enviar por WhatsApp, Telegram o correo</li>
          <li style={{ marginBottom: 8 }}>📊 Crear códigos QR de URLs largas</li>
          <li style={{ marginBottom: 8 }}>🔗 Rastrear clics de forma simple</li>
          <li style={{ marginBottom: 8 }}>✍️ Pegar URLs en documentos sin desorden</li>
          <li>🎯 Marketing y campañas cortas</li>
        </ul>
      </section>

      <section className="card" style={{ marginBottom: 32 }}>
        <h2 style={{ margin: '0 0 12px 0', fontSize: '1.25rem' }}>⚡ Tecnología</h2>
        <p style={{ margin: '0 0 12px 0', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          Construido con las últimas tecnologías web:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 }}>
          <div style={{ padding: 12, background: 'rgba(6, 182, 212, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-primary)' }}>
            <strong style={{ color: 'var(--cyan)' }}>React 19</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>UI Framework</p>
          </div>
          <div style={{ padding: 12, background: 'rgba(14, 165, 233, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-primary)' }}>
            <strong style={{ color: 'var(--sky)' }}>TypeScript</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Type Safety</p>
          </div>
          <div style={{ padding: 12, background: 'rgba(6, 182, 212, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-primary)' }}>
            <strong style={{ color: 'var(--cyan)' }}>Vite</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Build Tool</p>
          </div>
          <div style={{ padding: 12, background: 'rgba(14, 165, 233, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-primary)' }}>
            <strong style={{ color: 'var(--sky)' }}>CSS Moderno</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Variables & Grid</p>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', marginBottom: 32 }}>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary"
          style={{ padding: '14px 32px', fontSize: '1.05rem' }}
        >
          ← Volver al Acortador
        </button>
      </section>

      
    </div>
  );
};
