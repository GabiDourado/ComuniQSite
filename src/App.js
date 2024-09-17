import logo from './logo.svg';
import './Css/App.css'
import Menu from './Components/Menu';
import Home from './Pages/Home';
import Informacao from './Pages/Informacao';

function App() {
  return (
    <div className="App">
       <Menu/>
      <Home/> 
      <hr/>
      <Informacao/>
    </div>
  );
}

export default App;