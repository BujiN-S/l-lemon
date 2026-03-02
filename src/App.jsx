import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Homepage from './Homepage.jsx';
import Footer from './Footer.jsx';
import BookingPage from './BookingPage.jsx';
import ConfirmedBooking from './ConfirmedBooking.jsx';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </routes>
      <Homepage />
      <Footer />
    </>  
  );
}

export default App