import { useState } from 'react';

interface InputCodeProps {
  onSubmit?: (code: string) => void;
  placeholder?: string;
  label?: string;
}

const InputCode = ({ onSubmit, placeholder = 'Ej: AbC123', label = 'Código' }: InputCodeProps) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() && onSubmit) {
      onSubmit(code.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, width: '100%' }}>
      <label style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{label}</label>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '12px 14px',
          background: '#121212',
          color: '#e6eef8',
          border: '1px solid #262626',
          borderRadius: 8,
          fontSize: '1rem',
          outline: 'none',
        }}
        aria-label={label}
      />
      <button
        type="submit"
        disabled={!code.trim()}
        style={{
          padding: '10px 12px',
          background: code.trim() ? '#06b6d4' : '#666',
          color: '#021',
          border: 'none',
          borderRadius: 8,
          fontWeight: 600,
          cursor: code.trim() ? 'pointer' : 'not-allowed',
        }}
      >
        Buscar
      </button>
    </form>
  );
};

export default InputCode;