import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Gallery from "./Component.jsx/Gallery.jsx";
import Aboutus from './Component.jsx/Aboutus.jsx';
import Appointment from './Component.jsx/Appointment.jsx';



const router=createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/gallery", element:<Gallery/>},
  {path:"/about", element:<Aboutus/>},
  {path:"/appointment", element:<Appointment/>},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
