import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
