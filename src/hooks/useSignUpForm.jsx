import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignUpForm = () => {
  const [data, setData] = useState({ email: "", password: "", fullName: "", repPassword: "" });
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "", fullName: "", repPassword: "" });
  const [isValide, setValide] = useState(false);
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    setErrorMessage({ email: "", password: "", fullName: "", repPassword: "" });
  };

  const validateForm = () => {
    let isValid = true;
    if (data.password.length < 8) {
      setErrorMessage((prevState) => ({ ...prevState, password: 'Длина пароля должна быть более 8 символов' }));
      isValid = false;
    }
    if (!data.email.includes('@')) {
      setErrorMessage((prevState) => ({ ...prevState, email: 'электронный адрес должен содержать @' }));
      isValid = false;
    }
    if (data.repPassword !== data.password) {
      setErrorMessage((prevState) => ({ ...prevState, repPassword: 'Пароли не совпадает' }));
      isValid = false;
    }
    setValide(isValid);
    return isValid;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validateForm()) {
     
      const { email, password, fullName } = data;
      window.localStorage.setItem('users', JSON.stringify({ email, password, fullName, favoriteMoves: [] }));
      
      setErrorMessage({ email: "", password: "", fullName: "", repPassword: "" });
      alert(`Регитрация прошла успешно!`);
      navigate('/login/in', { replace: true });
    }
  };

  return { data, errorMessage, isValide, handleChange, handleSignUp };
};

export default useSignUpForm;