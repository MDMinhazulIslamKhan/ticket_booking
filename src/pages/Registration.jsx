import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform registration logic with name, email, and password

        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className='auth'>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div className='form-group'>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Register</button>
                <p className='auth__question'>Already have an account? <Link className='auth__question--link' to="/login">Please Login</Link></p>
            </form>
        </div>
    );
};

export default Registration;
