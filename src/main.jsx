import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
    </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
