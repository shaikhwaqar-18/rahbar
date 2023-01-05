
import './App.css';
import Students from './components/Students';
import Brad from './components/Brad';
import Ranbir from './components/Ranbir';
import Salman from './components/Salman';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className='Home'>
    <BrowserRouter>
    <nav>
      <Link to="./Brad">Student1</Link>
      <Link to="./Ranbir">Student2</Link>
      <Link to="./Salman">Student3</Link>
      </nav>
      <Routes>
        <Route path='/Brad' element={<Brad></Brad>}></Route>
        <Route path='/Ranbir' element={<Ranbir></Ranbir>}></Route>
        <Route path='/Salman' element={<Salman></Salman>}></Route>
      </Routes>
      </BrowserRouter>
      
        <h4>Click the links to see the result!</h4>
      </div>
      
     
  ) 
}

export default App;
