import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Routes/Home';
import About from './Components/Routes/About';
import Contect from './Components/Routes/Contect';
import Login from './Components/Routes/Login';
import LogOut from './Components/Routes/LogOutForm';
// import ToggleButton from './Components/Events/ToggleButton';
// import Home from './Components/LightAndDark/Home';
// import { Theme } from './Context/ThemeContext';

function App() {
  return (
    <div className="App" style={{padding:"10px 40px"}}>
      {/* <Theme>
        <Home />
      </Theme> */}
      {/* <ToggleButton /> */}

      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logOut' element={<LogOut/>}/>
          </Route>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contect/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
