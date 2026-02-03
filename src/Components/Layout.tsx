import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header>
                <div>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div className="logo-icon" aria-hidden />
                        <div>
                            <h1>Acortador de URL</h1>
                            <div className="subtitle">Rápido • Seguro • Simple</div>
                        </div>
                    </Link>
                    <nav style={{ display: 'flex', gap: '24px' }}>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
                        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
                    </nav>
                </div>
            </header>

            <main>
                <div>
                    <Outlet />
                </div>
            </main>

            <footer>
                <section style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', display:'flex', gap:2 }}>
                    <small>© {new Date().getFullYear()} Acortador de URL</small>
                    <p style={{ marginLeft: 12, display:'flex', gap:3 }}>
                        Hecho con ❤️ para hacer la vida más simple.
                        <a href="https://github.com/SantiPerez17/Proyecto_Acortador_URL" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>
                            Ver en GitHub
                        </a>
                    </p>
                </section>
            </footer>
        </>
    );
};
