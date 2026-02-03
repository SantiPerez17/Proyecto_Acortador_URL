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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <small>© {new Date().getFullYear()} Acortador de URL</small>
          <small>Built with ❤️ — <a href="https://github.com/SantiPerez17/Proyecto_Acortador_URL">Source</a></small>
        </div>
      </footer>
    </>
  );
};
