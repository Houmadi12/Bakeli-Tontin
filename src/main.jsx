import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import ErrorPage from './pages/erro-page.jsx';
import Inscription from './pages/inscription.jsx';
import Acceuil from './pages/Accueil.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/inscription",
    element: <Inscription />
  },
  {
    path: "/accueil",
    element: <Acceuil />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
