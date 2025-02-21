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
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-cdp35mh8t-arifs-projects-3008cba0.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <Addcoffee></Addcoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <Updatecoffee></Updatecoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-cdp35mh8t-arifs-projects-3008cba0.vercel.app/coffee/${params.id}`)
  },{
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("https://coffee-store-server-cdp35mh8t-arifs-projects-3008cba0.vercel.app/user")
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
