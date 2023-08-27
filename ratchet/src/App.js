import './App.css';
import Carosel from "../src/components/carosel";
import '../src/css/carosel.css';
import Home from '../src/components/home';
import '../src/css/home.css';
import NavBar from "../src/components/navBar";
import '../src/css/navBar.css';



function App() {
  return (
    <div className="App"> 
      <Carosel />
      <Home />
      <NavBar />  
    </div>
  );
}

export default App;
