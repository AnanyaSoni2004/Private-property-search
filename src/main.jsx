import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Usercontext from './Context/Usercontext.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Houses from './components/Houses/Houses.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Listing from './components/Listings/Listing.jsx'
import Contact from './components/Contactus/Contact.jsx'
const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='Houses' element={<Houses/>}/>
      <Route path='Listing' element={<Listing/>}/>
      <Route path='Contact' element={<Contact/>}/>
    </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontext>
    <RouterProvider router ={router}/>
    </Usercontext>
  </StrictMode>,
)
