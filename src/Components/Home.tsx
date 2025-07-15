import { Link } from "react-router-dom"

export const Home = () =>{
    return (
        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'start', height: '75vh' }}>
      <section style={{display:'flex', justifyContent:'space-between', width:'100%', gap:'16px'}}>
      <Link to='/generate-url'><button>Generar Url</button></Link> 
      <button>Ir a URL</button>
      </section>
    </div>
    )
}