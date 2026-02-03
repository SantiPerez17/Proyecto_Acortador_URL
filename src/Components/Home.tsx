import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRedirect = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!code.trim()) {
      setError('Por favor ingresa un código');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://json-server-shortcut-url.onrender.com/links?code=${code.trim()}`
      );
      const data = await response.json();

      if (data.length > 0) {
        navigate(`/${code.trim()}`);
      } else {
        setError('Código no encontrado');
      }
    } catch {
      setError('Error al buscar el código');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-container">
      <div className="card-grid">
        <form onSubmit={handleRedirect} className="card">
          <div className="card-header">
            <h2 className="card-title">🔗 Redirigir</h2>
            <p className="card-subtitle">Ingresa un código para ir a la URL</p>
          </div>

          <label>Código</label>
          <input
            type="text"
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(null); }}
            placeholder="Ej: AbC123"
            disabled={loading}
            aria-label="Código para redirigir"
          />

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Buscando...' : 'Ir a la URL'}
          </button>

          {error && <div className="error-message">⚠️ {error}</div>}
        </form>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">✂️ Acortar URL</h2>
            <p className="card-subtitle">Crea una URL corta y comparte</p>
          </div>

          <button
            onClick={() => navigate('/generate-url')}
            className="btn btn-sky"
          >
            Generar URL Corta →
          </button>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <p style={{ margin: '8px 0' }}>✓ Urls cortas únicas</p>
            <p style={{ margin: '8px 0' }}>✓ Fácil de compartir</p>
            <p style={{ margin: '8px 0' }}>✓ Sin límite de URLs</p>
          </div>
        </div>
      </div>
    </div>
  );
}