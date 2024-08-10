import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DiseasePage from './pages/DiseasePage';
import DiseaseScanPage from './pages/DiseaseScanPage';
import DiseaseDescribePage from './pages/DiseaseDescribePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/disease' element={<DiseasePage/>} />
            <Route path='/info' element={<h1>Rain Page</h1>} />
            <Route path='/care' element={<h1>Chat Page</h1>} />
            <Route path='/harvest' element={<h1>Chat Page</h1>} />
            <Route path='/disease/scan' element={<DiseaseScanPage/>} />
            <Route path='/disease/describe' element={<DiseaseDescribePage/>} />
            <Route path='/harvest' element={<h1>Chat Page</h1>} />
            <Route path='/harvest' element={<h1>Chat Page</h1>} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
