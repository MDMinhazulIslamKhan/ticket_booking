import { useState } from 'react';
import data from '../../assets/data.js'
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== data.userInfo.email) {
            return setErrorMessage("Email doesn't match.");
        }
        if (password !== data.userInfo.password) {
            return setErrorMessage("Password doesn't match.");
        }
        setEmail('');
        setPassword('');
        setErrorMessage('');
    };
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input type="password" required value={password} onChange={handlePasswordChange} />
                </div>
                <h2>{errorMessage}</h2>
                <button type="submit">Login</button>
                <p className='auth__question'>Are you new to Ticket Booking? <Link className='auth__question--link' to="/registration">Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;
