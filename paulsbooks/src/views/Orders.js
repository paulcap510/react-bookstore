import './styling.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Orders = () => {
    return ( 
        <div>
            <Navbar />
            <div className="orders-container">
                <h1>Your Order History</h1>
                <div className="order-section">
                    <p>No orders to show.</p>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Orders;