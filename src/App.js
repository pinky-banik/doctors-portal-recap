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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard';
import MyAppointment from './Components/Dashboard/MyAppointment';
import MyReview from './Components/Dashboard/MyReview';
import { useState } from 'react';
import MyHistory from './Components/Dashboard/MyHistory';
import AllUsers from './Components/Dashboard/AllUsers';
import RequireAdmin from './RequireAuth/RequireAdmin';
function App() {
  const[sidebar,setSidebar] =useState(true);
  return (
    <div>
      <Navbar sidebar={sidebar}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment/></RequireAuth>}></Route>

        <Route path="/dashboard" element={<RequireAuth><Dashboard setSidebar={setSidebar}/></RequireAuth>} >
          <Route index element={<MyAppointment/>}></Route>
          <Route path="review" element={<MyReview/>}></Route>
          <Route path="history" element={<MyHistory/>}></Route>
          <Route path="users" element={<RequireAdmin><AllUsers/></RequireAdmin>}></Route>
        </Route>

        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
