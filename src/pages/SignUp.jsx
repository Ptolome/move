import React,{useContext} from 'react';
import useSignUpForm from '../hooks/useSignUpForm';
import TextField from "../components/TextField";
import './sign.css'
import { ClickCounterContext } from '../context/click-counter';

export const SignUp = () => {
  const { data, errorMessage, handleChange, handleSignUp } = useSignUpForm();
  const {handleSimbolPres} = useContext(ClickCounterContext)

  const handleSubmit = (e) => {
    handleSignUp(e);
    handleSimbolPres()
  };

  return (
    <div className="all-page">
      <form className="sign__form">
        <h2>регистрация аккаунта</h2>
        <TextField
          label="Enter your name"
          name="fullName"
          type="text"
          value={data.fullName}
          onChange={handleChange}
        />
        <p style={{ color: 'red' }}> </p>
        <TextField
          label="Enter your email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <p style={{ color: 'red' }}> {errorMessage.email}</p>
        <TextField
          label="Enter your password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
        <p style={{ color: 'red' }}> {errorMessage.password}</p>
        <TextField
          label="Repeat your password"
          name="repPassword"
          type="password"
          value={data.repPassword}
          onChange={handleChange}
        />
        <p style={{ color: 'red' }}> {errorMessage.repPassword}</p>
        <button className="btn__sign" onClick={handleSubmit}>зарегистрироваться</button>
      </form>
    </div>
  );
};