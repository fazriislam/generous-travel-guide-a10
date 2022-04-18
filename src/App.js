import { Routes, Route } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Tours from './Pages/Tours/Tours';
import Signin from './SingupSignin/Signin/Signin';
import Signup from './SingupSignin/Signup/Signup';
import RequireAuth from '../src/RequitAuth/RequirAuth';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/booking' element={
          <RequireAuth>
            <Booking/>
          </RequireAuth>
        }/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
