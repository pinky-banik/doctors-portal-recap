import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Home from './Pages/Home';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
