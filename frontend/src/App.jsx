import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/khet' element={<h1>Khet Page</h1>} />
            <Route path='/rain' element={<h1>Rain Page</h1>} />
            <Route path='/chat' element={<h1>Chat Page</h1>} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
