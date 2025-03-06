import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css"

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, role: 'user' }),

            });
            const data = await response.json();
            localStorage.setItem('token', data.token);
            alert('Login successful!');
        } catch (err) {
            alert('Invalid email or password');
        }
    };

    return (
        <div className='auth-container'>
            <form onSubmit={handleSubmit} className='auth-form'>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
            <div className="register">
                <p>Don't have an account ? : <Link to="/register">register</Link></p>
            </div>

        </div>
    );
};

export default LoginForm;
