import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Mens from './component/Mens';
import Womens from './component/Womens';
import Kids from './component/Kids';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          {/* Set the home page as the default route */}
          <Route path="/Campusshoe" element={<Home />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Kids" element={<Kids />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
