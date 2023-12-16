import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        {/* First Navbar */}
        <div className="navbar">
          <div className="logo">
            <div className="logo-icon">
              <FontAwesomeIcon icon={faBook} />
            </div>
            <a href="/" className="logo-link">Paul's Books</a>          
            </div>
          <div className="search-box">
            <input type="text" className="search-input" placeholder="Search books..." />
          </div>
          <Link to="/signin" className="button nav-btn">Sign In</Link>
          <Link to="/orders" className="button nav-btn">Orders</Link>
          <Link to="#" className="button cart-btn"> <FontAwesomeIcon icon={faCartShopping} /> Cart</Link>
        </div>
  
        {/* Second Navbar */}
        <div className="navbar genres-navbar">
          <div className="genres">
            <button className="button genre-btn">All</button>
            <button className="button genre-btn">Nonfiction</button>
            <button className="button genre-btn">Fantasy</button>
            <button className="button genre-btn">Horror</button>
            <button className="button genre-btn">Romance</button>
            <button className="button genre-btn">History</button>
            <button className="button genre-btn">Classics</button>
            <button className="button genre-btn">Business</button>
            <button className="button genre-btn">Others</button>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default Navbar;