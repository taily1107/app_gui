import React from 'react'
import  './style.css'
import { 
    Link
  } from 'react-router-dom'

function Header (){
    return  <div className='header-bg'>
  
     <div ><Link to={"/Home"}>Home</Link ></div>
     <div><Link to={"/About"}>About</Link ></div>
     <div> <Link to={"/Product"}>Product</Link ></div>

    
    </div>
}
export default Header