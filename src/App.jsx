import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ServicesPage } from './pages/ServicesPage';
import { HomePage } from './pages/HomePage';
import { NoPage } from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/bit_10_bootstrap-site/' element={<HomePage />}/>
        <Route path='/bit_10_bootstrap-site/services' element={<ServicesPage />}/>
        {/* <Route path='/bit_10_bootstrap-site/register' element={<RegisterPage />}/> */}
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
// https://seolounge.radiantthemes.com/home-version-11/