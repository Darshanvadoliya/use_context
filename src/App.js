import './App.css';
import ToggleButton from './Components/Events/ToggleButton';
import Home from './Components/LightAndDark/Home';
import { Theme } from './Context/ThemeContext';

function App() {
  return (
    <div className="App">
      {/* <Theme>
        <Home />
      </Theme> */}
      <ToggleButton />
    </div>
  );
}

export default App;
