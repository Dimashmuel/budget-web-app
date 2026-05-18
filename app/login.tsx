import { Link } from "react-router";
import "./App.css";
import { useState } from 'react';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }
    console.log('Email:', email);
    console.log('Password:', password);

    return (
        <form onSubmit={e => e.preventDefault()}>
            <h1 style={{ color: 'green' }}>Login Page</h1>
            <label>Email:
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmail} />
            </label><br />
            <label>Password:
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePassword} />
            </label><br />
            <button type="submit">Login</button>
            <p className='small'> if you don't have an account, <Link to="/register">SignUp</Link></p>
        </form>
    );
}