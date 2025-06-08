import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';
import Houses from './components/Houses/Houses';
import {Outlet} from 'react-router-dom'
import Listing from './components/Listings/Listing';
function App() {


  return (
    <>
    <Navbar/>
    <Outlet/>
    <Listing/>
    </>
  )
}

export default App
