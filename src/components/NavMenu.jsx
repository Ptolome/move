import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toExitAuth } from '../store/slices/ToAuthSlice'
import { useNavigate } from 'react-router-dom'
import logoImage from "../img/logoCinema.png"
import './NaveMenu.css'
import { ClickCounterContext } from '../context/click-counter.js';

export default function NavMenu() {
    const dispatch=useDispatch()
    const isAuth=useSelector(store=>store.toAuth.isAuth)
    const { handleSimbolPres } = useContext(ClickCounterContext);

    const navigate=useNavigate()
    const handleExit=()=>{
        handleSimbolPres()
        dispatch(toExitAuth())
        navigate('/',{replace:true})
    }
  return (
    
        <nav className='container nav'>
            <div className='logo__picture'>
                 <Link to="/" onClick={handleSimbolPres}><img className='logo' src={logoImage}  alt="логотип" /></Link>
                 </div>
            <ul className='list__items'>
                
                {!isAuth && 
                (<><li >
                    <Link to="login/in" onClick={handleSimbolPres}>Sign in</Link>
                </li>
                <li>
                    <Link to="login/up" onClick={handleSimbolPres}>Sign up</Link>
                </li></>)}
                <li>
                    <Link to={isAuth ? "favorite" : 'login/in' } onClick={handleSimbolPres}>Your fvorite pages</Link>
                </li>
                {isAuth&& <li onClick={handleExit} style={{color:'red'}} >exit</li>}
            </ul>
           
        </nav>
   

  )
}
