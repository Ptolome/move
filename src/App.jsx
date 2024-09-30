import {Routes, Route} from 'react-router-dom'
import './App.css';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Favorite } from './components/Favorite';
import {MainPage} from './components/MainPage';
import { useSelector } from 'react-redux';
import NavMenu from './components/NavMenu';
import PageMove from './components/PageMove';


function App() {
  const isAuth= useSelector(store=>store.toAuth.isAuth)


  console.log(isAuth);
  return (
    <>
    <NavMenu/>
     <h1 style={isAuth ? {background:'green'}: {background:'red'}}>movePoratal</h1>
     
      <Routes>
        <Route path='*' element={<MainPage/>}/>
        <Route path='login/in' element={<SignIn/>}/>
        <Route path='login/up' element={<SignUp/>}/>
        <Route path='favorite' element={<Favorite/>}/>
        <Route path=':id' element={<PageMove />}/>
      </Routes>
      </>
  );
}

export default App;
