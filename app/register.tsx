import { useState } from "react";
import "./App.css";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value);
    }

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    return (
        <form onSubmit={e => e.preventDefault()}>

            <h1 style={{ color: 'blue' }}>Register Page</h1>
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

            <label>Confirm Password:
                <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={handleConfirmPassword} />
            </label><br />

            <button type="submit" >Register</button>
            <p className='small'> if you already have an account, Login</p>   
        
        </form>

    );
}