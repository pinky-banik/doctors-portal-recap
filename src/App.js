import {Routes,Route} from 'react-router-dom';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import About from './Pages/About';
import Appointment from './Pages/Appointment';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RequireAuth from './RequireAuth/RequireAuth';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment/></RequireAuth>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
