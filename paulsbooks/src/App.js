import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ImageRow from './components/ImageRow/ImageRow';
import Footer from './components/Footer/Footer';
import BookPage from './components/BookPage/BookPage'; 
import SignIn from './views/SignIn'; 
import Orders from './views/Orders'; 

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageRow />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:bookId" element={<BookPage />} />          
          <Route path="/signin" element={<SignIn />} />          
          <Route path="/orders" element={<Orders />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;


