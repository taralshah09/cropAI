import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DiseasePage from './pages/DiseasePage';
import DiseaseScanPage from './pages/DiseaseScanPage';
import DiseaseDescribePage from './pages/DiseaseDescribePage';
import CropInfoPage from './pages/CropInfoPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/disease' element={<DiseasePage/>} />
            <Route path='/info' element={<CropInfoPage/>} />
            <Route path='/harvest' element={<h1>Chat Page</h1>} />
            <Route path='/disease/scan' element={<DiseaseScanPage/>} />
            <Route path='/disease/describe' element={<DiseaseDescribePage/>} />
            <Route path='/info/pest-prevention' element={<h1>PestPrevention</h1>} />
            <Route path='/info/disease-management' element={<h1>Disease Management</h1>} />
            <Route path='/info/nutrient-guide' element={<h1>Nutrient Guide</h1>} />
            <Route path='/info' element={<CropInfoPage/>} />
            <Route path='/harvest' element={<h1>Chat Page</h1>} />
            <Route path='/harvest' element={<h1>Chat Page</h1>} />
            <Route path='/*' element={<h1>Oops path not found! 404!</h1>}></Route>
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
