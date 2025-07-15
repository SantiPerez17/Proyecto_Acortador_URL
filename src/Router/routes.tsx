import { createBrowserRouter } from 'react-router-dom';
import { GenerateUrl } from '../Components/GenerateUrl';
import { Home } from '../Components/Home';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
        path:'/generate-url',
        element: <GenerateUrl />,
    },
    {
      path: '/about',
      element: "About",
    },
    {
      path: '/contact',
      element: "Contact",
    },
    {
      path: '*', 
      element: "404",
    },
  ]);
  
  export default router;