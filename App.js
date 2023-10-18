import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';

function App() {
  return (
    <>
  {/* <Navigation/> */}
     <Routes>

      <Route path='/' element={<Navbar/>}></Route>
      <Route path='/Login' element={<Login />} />
     <Route path='/Signup' element={<Signup />} />
      
    
    </Routes>
    </>
  );
}

export default App;

