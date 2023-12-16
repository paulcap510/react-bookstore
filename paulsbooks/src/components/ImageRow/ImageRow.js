import './imagerow.css'

const ImageRow = () => {
    const imagePaths = [
      '/images/book1.jpg',
      '/images/book2.jpg',
      '/images/book3.jpg',
      '/images/book9.jpg',
      '/images/book6.jpg',
      '/images/book8.jpg',
    ];
  
    return (
    <div className="image-row-container">
        <h1 style={{ textAlign: 'center'}}>Best Sellers</h1>
        <div className="image-row">
            {imagePaths.map((path, index) => (
            <img key={index} src={path} alt={`Image ${index + 1}`} className="image" />
            ))}
        </div>
    </div>
    );
  };

  export default ImageRow;