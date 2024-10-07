import TextField from "../components/TextField";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toEnterAuth } from "../store/slices/ToAuthSlice";
import { useNavigate } from "react-router-dom";
import './sign.css'
import { ClickCounterContext } from "../context/click-counter";

export const SignIn = () => {
  const {handleSimbolPres} = useContext(ClickCounterContext)
  const [data, setData] = useState({ email: "", password: "", fullName: "" });
  const handleChange = ({ target }) => {
    handleSimbolPres()
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const handleSignIn=(e)=>{
    e.preventDefault()
    handleSimbolPres()
    const localData=window.localStorage.getItem('users')
    
    const {email,password,fullName} = JSON.parse(localData)
   
    if (data.email === email && data.password === password && data.fullName === fullName ){
      
      dispatch(toEnterAuth({username:fullName}))
      navigate('/')
      
    }else{
      alert('Вы ввели некоректные данные')
    }
  }
  return (
    <div className="all-page">
      <form className="sign__form">
        <h2>Вхов в аккаунт</h2>
        <TextField
          label="Enter your name"
          name="fullName"
          type="text"
          value={data.fullName}
          onChange={handleChange}
        />
        <p></p>
        <TextField
          label="Enter your email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <p></p>
        <TextField
          label="Enter your password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
        <p></p>
        <button className="btn__sign" onClick={handleSignIn}>Войти</button>
      </form>
    </div>
  );
};
