import { createBrowserRouter } from 'react-router-dom';
import { GenerateUrl } from '../Components/GenerateUrl';
import { Home } from '../Components/Home';
import Redirect from '../Components/Redirect';
import { About } from '../Components/About';
import { Layout } from '../Components/Layout';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'generate-url',
          element: <GenerateUrl />,
        },
        {
          path: ':codePath',
          element: <Redirect />,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
    {
      path: '*', 
      element: "404",
    },
  ]);
  
  export default router;