import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toExitAuth } from '../store/slices/ToAuthSlice'


export default function NavMenu() {
    const dispatch=useDispatch()
    const isAuth=useSelector(store=>store.toAuth.isAuth)

    const handleExit=()=>{
        
        dispatch(toExitAuth())
        console.log(isAuth);
    }
  return (
    
        <nav >
            <ul style={{display:'flex', justifyContent:'end', gap: '20px', background:'pink', color:'white', listStyle:'none'}}>
                <li>
                    <Link to="/">Logo</Link>
                </li>
                <li>
                    <Link to="login/in">Sign in</Link>
                </li>
                <li>
                    <Link to="login/up">Sign up</Link>
                </li>
                <li>
                    <Link to="favorite">Your fvorite pages</Link>
                </li>
                {isAuth&&<button onClick={handleExit} >exit</button>}
            </ul>
           
        </nav>
   

  )
}
