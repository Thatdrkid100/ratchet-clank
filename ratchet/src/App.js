import './App.css';
import Home from '../src/components/home';
import NavBar from "../src/components/navBar";
import Carosel from "../src/components/carosel";

function App() {
  return (
    <div className="App"> 
      <Home />
      <NavBar />  
      <Carosel />
    </div>
  );
}

export default App;
