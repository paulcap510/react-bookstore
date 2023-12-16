import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './bookpage.css';  

function BookPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch('/books_data.json')
      .then(response => response.json())
      .then(data => {
        const foundBook = data.find(b => b.id.toString() === bookId);
        setBook(foundBook);
      })
      .catch(error => console.error('Error fetching book data:', error));
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="book-card">
        <img src={book.cover_image} alt={book.title} className="book-cover" />
        <div className="book-details">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Publication Year:</strong> {book.publication_year}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p>{book.description}</p>
          <div className="button-div">
            <button className="buy-btn">Add to Cart</button>
            <button className="wishlist-btn">Add to Wish List</button>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookPage;
