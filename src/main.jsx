import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './Components/Addcoffee.jsx';
import Updatecoffee from './Components/Updatecoffee.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addCoffee",
    element: <Addcoffee></Addcoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <Updatecoffee></Updatecoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },{
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
