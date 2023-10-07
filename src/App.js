import './App.css';
import Create from './Pages/Create/Create';
import Read from './Pages/Read/Read';
import Update from './Pages/Update/Update';
import Delete from './Pages/Delete/Delete';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
