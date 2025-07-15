import { useState } from "react";

interface Resultado {
    hora: string;
    fecha: string;
    codigo: string;
    urlOriginal: string;
}
export const GenerateUrl = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [resultado, setResultado] = useState<Resultado | null>(null);

  const obtenerFecha = () => {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0]; // yyyy-mm-dd
  };

  const obtenerHora = () => {
    const ahora = new Date();
    return ahora.toTimeString().split(' ')[0].slice(0, 5); // hh:mm
  };

  const generarCodigoUnico = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleGenerar = () => {
    if (!inputUrl.trim()) {
      alert('Por favor ingresá una URL');
      return;
    }

    const nuevoObjeto = {
      hora: obtenerHora(),
      fecha: obtenerFecha(),
      codigo: generarCodigoUnico(),
      urlOriginal: inputUrl.trim()
    };

    console.log('Objeto generado:', nuevoObjeto);
    setResultado(nuevoObjeto);
  };

  return (
    <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'start', height: '75vh' }}>
      <section style={{ display: 'grid', width: '100%', gap: '16px' }}>
        <label>URL Original</label>
        <input
          style={{
            width: '100%',
            height: '40px',
            background: '#333',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            outline: 'none',
            fontSize: '1.2rem'
          }}
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="ej: turnos, contacto, etc."
        />
        <button onClick={handleGenerar}>Generar Objeto</button>

        {resultado && (
          <pre style={{ background: '#222', color: '#0f0', padding: '1rem', borderRadius: '5px' }}>
            {JSON.stringify(resultado, null, 2)}
          </pre>
        )}
      </section>
    </div>
  );
};
