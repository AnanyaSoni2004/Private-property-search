import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';
import {Outlet} from 'react-router-dom'
function App() {


  return (
    <>
    <Navbar/>
    <Outlet/>

    </>
  )
}

export default App
