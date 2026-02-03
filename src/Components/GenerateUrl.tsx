import { useState } from "react";

interface Result {
  time: string;
  date: string;
  code: string;
  originalUrl: string;
  shortUrl?: string;
}

export const GenerateUrl = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const getDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0]; // yyyy-mm-dd
  };

  const getTime = () => {
    const now = new Date();
    return now.toTimeString().split(' ')[0].slice(0, 5); // hh:mm
  };

  const generateUniqueCode = (length = 6) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let out = '';
    for (let i = 0; i < length; i++) out += chars.charAt(Math.floor(Math.random() * chars.length));
    return out;
  };

  const normalizeUrl = (url: string): string | null => {
    const trimmed = url.trim();
    if (!trimmed) return null;
    try {
      return new URL(trimmed).toString();
    } catch {
      try {
        return new URL(`https://${trimmed}`).toString();
      } catch {
        return null;
      }
    }
  };

  const handleCopy = async (text?: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('No se pudo copiar al portapapeles');
    }
  };

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!inputUrl.trim()) {
      setError('Please enter a URL');
      return;
    }

    const normalized = normalizeUrl(inputUrl);
    if (!normalized) {
      setError('Ingrese una URL válida (ej. https://example.com)');
      return;
    }

    setLoading(true);

    const code = generateUniqueCode();
    const payload = {
      code,
      url: normalized,
      createat: new Date().toISOString(),
      usercreate: 'anonymous'
    };

    try {
      const res = await fetch('https://json-server-shortcut-url.onrender.com/links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const created = await res.json();

      const shortUrl = `${window.location.origin}/${created.code || code}`;

      const newResult: Result = {
        time: getTime(),
        date: getDate(),
        code: created.code || code,
        originalUrl: created.url || normalized,
        shortUrl,
      };

      setResult(newResult);
      setInputUrl('');
    } catch (err) {
      setError('Error al generar la URL corta. Intente nuevamente.');
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', paddingTop: 40 }}>
      <form onSubmit={handleGenerate} aria-label="Short URL generator" className="card" style={{ maxWidth: 720, width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#e6eef8' }}>Acortar URL</h2>
          <small style={{ color: 'var(--text-meta)' }}>{getDate()} {getTime()}</small>
        </div>

        <label>Original URL</label>
        <input
          aria-label="Original URL"
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="https://example.com/page"
          disabled={loading}
        />

        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ flex: 1 }}>
            {loading ? 'Generando...' : 'Generar'}
          </button>
          <button type="button" className="btn btn-secondary" disabled={loading && !result} onClick={() => { setInputUrl(''); setResult(null); setError(null); }}>
            Reset
          </button>
        </div>

        {error && <div role="alert" className="error-message">❌ {error}</div>}

        {result && (
          <div className="result-box">
            <div className="result-url">
              <div className="result-url-text">{result.shortUrl}</div>
              <div className="result-actions">
                <a href={result.shortUrl} target="_blank" rel="noreferrer">Abrir</a>
                <button type="button" className={`btn ${copied ? 'btn-success' : 'btn-copy'}`} onClick={() => handleCopy(result.shortUrl)}>
                  {copied ? '✓ Copiado' : 'Copiar'}
                </button>
              </div>
            </div>

            <details className="result-details">
              <summary>Detalles</summary>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </details>
          </div>
        )}
      </form>
    </div>
  );
}
