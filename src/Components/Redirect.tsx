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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>This code does not exist</p>;

    return null;
}