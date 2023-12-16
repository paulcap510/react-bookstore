import './styling.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const SignIn = () => {
    return ( 
        <div>
            <Navbar />
            <div className="container">
            <form className="signin-form">
                <label for="username">Username</label>
                <input type="text" id="username-input" name="username-input"></input>
                <label for="password">Password</label>
                <input type="password" id="password-input" name="password-input"></input>
                <button>Sign in</button>
                <p>Don't have an account? Register here?</p>
            </form>
            </div>
        <Footer />
        </div>
     );
}
 
export default SignIn;