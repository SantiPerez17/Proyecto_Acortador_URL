import { RouterProvider } from "react-router-dom"
import router from "./Router/routes"

function App() {
  return (
    <>
      <header style={{ background: '#06283D', color: '#E6F0F2', padding: '14px 0' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 8, background: '#09A6C7' }} aria-hidden />
            <div>
              <h1 style={{ margin: 0, fontSize: '1.125rem' }}>Acortador de URL</h1>
              <div style={{ fontSize: '0.8rem', color: '#BFD7DF' }}>Rápido • Seguro • Simple</div>
            </div>
          </div>
          <nav style={{ fontSize: '0.9rem', color: '#BFD7DF' }}>Demo • Docs</nav>
        </div>
      </header>

      <main style={{ maxWidth: 980, margin: '28px auto', padding: '0 16px' }}>
        <div style={{ background: '#071017', padding: 18, borderRadius: 10, boxShadow: '0 8px 30px rgba(2,6,23,0.6)' }}>
          <RouterProvider router={router} />
        </div>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: '#021218', color: '#9FB4BE', padding: '14px 0' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
          <small>© {new Date().getFullYear()} Acortador de URL</small>
          <small>Built with ❤️ — <a href="https://github.com/SantiPerez17/Proyecto_Acortador_URL" style={{ color: '#9FB4BE', textDecoration: 'underline' }}>Source</a></small>
        </div>
      </footer>
    </>
  )
}

export default App
