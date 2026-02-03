import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Redirect() {
    const { codePath } = useParams<{ codePath: string }>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!codePath) return;

        const fetchLink = async () => {
            try {
                const response = await fetch(
                    `https://json-server-shortcut-url.onrender.com/links?code=${codePath}`
                );
                const data = await response.json();

                if (data.length > 0) {
                    // Normalize URL: ensure it has a scheme
                    let target = data[0].url || '';
                    if (!/^https?:\/\//i.test(target)) {
                        target = 'https://' + target;
                    }
                    // Use assign to navigate to external URL
                    window.location.assign(target);
                } else {
                    setError(true);
                }
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchLink();
    }, [codePath]);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-content">
                    <div className="loading-icon">⏳</div>
                    <p className="loading-text">Redirigiendo...</p>
                    <p className="loading-subtext">Por favor espera un momento</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <div className="error-box">
                    <div className="error-icon">❌</div>
                    <h2 className="error-title">Código no encontrado</h2>
                    <p className="error-description">
                        El código "{codePath}" no existe o ha expirado.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="btn btn-primary error-button"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    return null;
}