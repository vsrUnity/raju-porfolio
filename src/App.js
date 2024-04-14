import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*    */}
        <Home/>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
