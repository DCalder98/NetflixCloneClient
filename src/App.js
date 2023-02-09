import logo from './logo.svg';
import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate
} from 'react-router-dom';

const App = () => {
  const user = false
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Navigate to='register'/>} />
        <Route path='/register' element={user ? <Home/> : <Register/>}/>
        <Route path='/login' element={<Login/>}/>
          <>
          <Route path='/movies' element={user ? <Home type={'movies'}/> : <Navigate to='/'/>} />
          <Route path='/series' element={user ? <Home type={'series'}/> : <Navigate to='/'/>} />

          </>

      </Routes>
    </Router>
  )
}

export default App;
