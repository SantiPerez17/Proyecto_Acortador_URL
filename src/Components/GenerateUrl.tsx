import { useState, type ReactElement } from "react";

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

  const handleGenerate = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!inputUrl.trim()) {
      setError('Please enter a URL');
      return;
    }

    setLoading(true);

    const code = generateUniqueCode();
    const payload = {
      code,
      url: inputUrl.trim(),
      createat: new Date().toISOString(),
      usercreate: 'anonymous'
    };

    try {
      const res = await fetch('http://localhost:3001/links', {
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
        originalUrl: created.url || inputUrl.trim(),
        shortUrl,
      };

      setResult(newResult);
      setInputUrl('');
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'start', height: '75vh' }}>
      <form onSubmit={handleGenerate} style={{ marginBottom: '1rem' }}>
      <section style={{ display: 'grid', width: '100%', gap: '16px' }}>
        <label>Original URL</label>
        <input
          style={{
            width: '100%',
            background: '#333',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            outline: 'none',
            fontSize: '1.2rem'
          }}
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="e.g.: https://example.com/page"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Short URL'}
        </button>
        <button disabled={!result || inputUrl==''} onClick={(e)=>{
          e.preventDefault()
          setInputUrl('')
          setResult(null)
        }}>
          {loading ? 'Resetting...' : 'Reset'}
        </button>

        {error && <div style={{ color: 'tomato' }}>{error}</div>}

        {result && (
          <div style={{ background: '#222', color: '#0f0', padding: '1rem', borderRadius: '5px' }}>
            <pre>{JSON.stringify(result, null, 2)}</pre>
            <div style={{ marginTop: '8px' }}>
              Short URL:&nbsp;
              <a href={result.shortUrl} target="_blank" rel="noreferrer" style={{ color: '#8fd' }}>
                {result.shortUrl}
              </a>
            </div>
          </div>
        )}
      </section>
        </form>
    </div>
  );
};
