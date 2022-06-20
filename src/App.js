import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Componenets/Navbar';
import Home from './Componenets/Home';
import About from './Componenets/About';
import NoteState from './Context/notes/NoteState';
import Alert from './Componenets/Alert';
import Login from './Componenets/Login';
import SignUp from './Componenets/SignUp';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Navbar/>
      <Alert alert={alert} />
      <div className="container">
    <Routes>
        <Route path='/' element={<Home showAlert={showAlert}/>} />
      <Route path="/about" element={<About />}>
      </Route>
      <Route path="/login" element={<Login showAlert={showAlert}/>}>
      </Route>
      <Route path="/signup" element={<SignUp showAlert={showAlert}/>}>
        </Route>     
    </Routes>
      </div>
  </BrowserRouter>
  </NoteState>
    </>
  );
}

export default App;
