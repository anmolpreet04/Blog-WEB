import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AboutUs from './components/views/AboutUs';

function App() {
  return (
    <>
    <Routes>
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    </>
  );
}

export default App;
