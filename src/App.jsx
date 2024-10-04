import {Routes, Route, Navigate} from 'react-router-dom'
import { lazy } from 'react';
import './App.css';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Favorite } from './pages/Favorite';
import {MainPage} from './pages/MainPage';
import { useSelector } from 'react-redux';
import NavMenu from './components/NavMenu';
import Page404 from './pages/Page404';
// import PageMove from './components/PageMove';
const PageMove = lazy(() => import ('./pages/PageMove'))

function App() {
  const isAuth= useSelector(store=>store.toAuth.isAuth)
  const isAuthName=useSelector(store=>store.toAuth.isAuthName)
 

  console.log(isAuth);
  return (
    <>
    <NavMenu/>
    <div className='container line__auth' style={isAuth ? {background:'green'}: {background:'red'}}>
      <div >movePoratal</div>
      <div>{isAuth ? isAuthName: "Гость"}</div>
     </div>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='login/in' element={<SignIn/>}/>
        <Route path='login/up' element={<SignUp/>}/>
        <Route path='favorite' element={<Favorite/>}/>
        <Route path='move/:id' element={<PageMove/> }/>
        <Route path='*' element={<Navigate to="/404" replace/>}/>
        <Route path='/404' element={<Page404/>}/>
      </Routes>
      </>
  );
}

export default App;