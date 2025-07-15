import { RouterProvider } from "react-router-dom"
import router from "./Router/routes"
import { Home } from "./Components/Home"

function App() {
  
  return (
    <>
    <header>
      <h1>Acortador de URL</h1>
    </header>
    <RouterProvider router={router}/>
    <footer>
      <h1>Acortador de URL</h1>
    </footer>
    </>
  )
}

export default App
