import { Routes, Route } from 'react-router-dom';
import './App.css';

import Landing from './Pages/Landing';
import Singleton from './Pages/Patterns/Singleton/';
import Proxy from './Pages/Patterns/Proxy';
import Navbar from './component/Navbar/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/singleton' element={<Singleton />} />
        <Route exact path='/proxy' element={<Proxy />} />
      </Routes>
    </div>
  );
};

export default App;
