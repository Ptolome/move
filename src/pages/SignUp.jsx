import { useNavigate}  from "react-router-dom";
import TextField from "../components/TextField";
import { useState } from "react";

export const SignUp = ()=>{
    const [data, setData] = useState({ email: "", password: "", fullName: "",repPassword:'' });
    const [errorMessage, setErrorMessage]=useState({ email: "", password: "", fullName: "",repPassword:'' })
    const [isValide, setValide] = useState(false)
    const navigate=useNavigate()

    const handleChange = ({ target }) => {
      setData((prevState) =>  ( {...prevState, [target.name] : target.value  }));
      setErrorMessage({ email: "", password: "", fullName: "",repPassword:'' })
    }
    
    const handleSignUp = (e) => {
        
        e.preventDefault()
        setValide(true)
        if (data.password.length<8){
          setErrorMessage((prevState)=>({...prevState, password:'Длина пароля должна быть более 8 символов '}))
          setValide(false)
        }
        if ( !data.email.includes('@')){
          setErrorMessage((prevState)=>({...prevState, email:'электронный адрес должен содержать @'}))
          setValide(false)
        }
        if (data.repPassword !== data.password){
          setErrorMessage((prevState)=>({...prevState, repPassword:'Пароли не совпадает  '}))
          setValide(false)
        }
        
        if (data.email && data.fullName && data.password && data.repPassword && isValide) {
            console.log(isValide);
            const {email, password,fullName}=data
            window.localStorage.setItem('users', JSON.stringify({email, password, fullName, favoriteMoves:[]} ))

            alert(`Регитрация прошла успешно!`)
            setErrorMessage({ email: "", password: "", fullName: "",repPassword:'' })
            navigate('/login/in',{replace:true})
        } 
    }
            return (
              <form>
                <h2>регистрация аккаунта</h2>
                <TextField
                  label="Enter your name"
                  name="fullName"
                  type="text"
                  value={data.fullName}
                  onChange={handleChange}
                />
                <p style={{color: 'red'}}> </p>
                <TextField
                  label="Enter your email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                />
                <p style={{color: 'red'}}> {errorMessage.email}</p>
                <TextField
                  label="Enter your password"
                  name="password"
                  type="password"
                  value={data.password}
                  onChange={handleChange}
                />
               <p style={{color: 'red'}}> {errorMessage.password}</p>
                <TextField
                  label="Repeat your password"
                  name="repPassword"
                  type="password"
                  value={data.repPassword}
                  onChange={handleChange}
                />
              <p style={{color: 'red'}}> {errorMessage.repPassword}</p>
                <button onClick={handleSignUp}>зарегистрироваться</button>
              </form>
            );
          };


