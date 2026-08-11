import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cortes from './Pages/Cortes'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cortes" element={<Cortes/>}/>

          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
