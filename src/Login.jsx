import React, { Component } from 'react';
import './main.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

class Login extends Component {

    handleClick = async (e) => {
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
            this.props.logMeIn(data.user)
            console.log(data)
        } else {
            console.log('Login failed')
        }

    };

    render() {
        return (
            <div>
                <h1 className="text-center">Login</h1>
                <form className="col-3 mx-auto" onSubmit={this.handleClick}>
                    <input className="form-control" type="text" name="username" placeholder="Username" />
                    <input className="form-control" type="current-password" name="password" placeholder="Password" />
                    <button className="btn btn-success mx-auto">Submit</button>
                </form>
            </div>
        );
    }
}


export default Login;