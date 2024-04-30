import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Login = ({ logMeIn }) => {

    const redirect = useNavigate('/shop')

    const handleSubmit = async (e) => {

        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const url = BACKEND_URL + '/api/login'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${btoa(username + ':' + password)}`
            },
        }

        const request = await fetch(url, options);
        const data = await request.json();

        if (data.status === 'ok') {
            logMeIn(data.user)
            console.log('Login successful', data.user)
        } else {
            console.log('Login failed')
        }

        redirect('/shop')

    };
    return (
        <div>
            <h1 className="text-center">Login</h1>
            <form className="col-3 mx-auto" onSubmit={handleSubmit}>
                <input className="form-control" type="text" name="username" placeholder="Username" />
                <input className="form-control" type="current-password" name="password" placeholder="Password" />
                <button className="btn btn-success mx-auto">Submit</button>
            </form>
        </div>
    );
}

export default Login