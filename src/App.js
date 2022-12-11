import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Child from './Pages/Child';
import Parent from './Pages/Parent';
import Shortform from './Pages/Shortform';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Parent />} >Home</Route>
        <Route path='/form' element={<Shortform />} >Home</Route>
      </Routes>


    </div>
  );
}

export default App;
