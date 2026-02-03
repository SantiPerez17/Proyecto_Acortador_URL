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
      <form onSubmit={handleGenerate} aria-label="Short URL generator" style={{ width: '100%', maxWidth: 720 }}>
        <section style={{ background: '#0b0b0b', padding: 20, borderRadius: 10, boxShadow: '0 6px 18px rgba(0,0,0,0.6)', gap: 12, display: 'grid' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#e6eef8' }}>Acortar URL</h2>
            <small style={{ color: '#8b98a6' }}>{getDate()} {getTime()}</small>
          </div>

          <label style={{ color: '#cbd5e1' }}>Original URL</label>
          <input
            aria-label="Original URL"
            style={{
              width: '100%',
              background: '#121212',
              color: '#e6eef8',
              borderRadius: '8px',
              border: '1px solid #262626',
              outline: 'none',
              padding: '12px 14px',
              fontSize: '1rem'
            }}
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://example.com/page"
            disabled={loading}
          />

          <div style={{ display: 'flex', gap: 8 }}>
            <button type="submit" disabled={loading} style={{ flex: 1, padding: '10px 12px', borderRadius: 8, background: '#06b6d4', color: '#021', border: 'none', fontWeight: 600 }}>
              {loading ? 'Generando...' : 'Generar'}
            </button>
            <button type="button" disabled={loading && !result} onClick={() => { setInputUrl(''); setResult(null); setError(null); }} style={{ padding: '10px 12px', borderRadius: 8, background: '#222', color: '#cbd5e1', border: '1px solid #2b2b2b' }}>
              Reset
            </button>
          </div>

          {error && <div role="alert" style={{ color: 'tomato' }}>{error}</div>}

          {result && (
            <div style={{ background: '#071018', color: '#e6fff3', padding: '12px', borderRadius: 8, border: '1px solid #06323a' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.95rem', color: '#9fe6d8', wordBreak: 'break-all' }}>{result.shortUrl}</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a href={result.shortUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#e6eef8', background: '#05445E', padding: '8px 10px', borderRadius: 6 }}>Abrir</a>
                  <button type="button" onClick={() => handleCopy(result.shortUrl)} style={{ background: copied ? '#16a34a' : '#0ea5e9', color: '#021', border: 'none', padding: '8px 10px', borderRadius: 6, fontWeight: 600 }}>{copied ? 'Copiado' : 'Copiar'}</button>
                </div>
              </div>

              <details style={{ marginTop: 10, color: '#9fb8b3' }}>
                <summary style={{ cursor: 'pointer' }}>Detalles</summary>
                <pre style={{ marginTop: 8, color: '#cde6dd', background: 'transparent', border: 'none', padding: 0 }}>{JSON.stringify(result, null, 2)}</pre>
              </details>
            </div>
          )}
        </section>
      </form>
    </div>
  )};
