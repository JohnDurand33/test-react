import React, { Component } from 'react';
import './main.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

class SignUp extends Component {
    handleClick = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        {/* USE THE "name" attribute for each entry! */ }
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const body = {
            name,
            email,
            password,
        }

        console.log('body', body)
        // eslint-disable-next-line
        {/* HARDCODED USER_ID< WILL UPDATE THIS TOMORROW */ }
        const url = BACKEND_URL + '/api/signup'

        console.log('url', url)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };

        console.log(options)

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);

    };

    render() {
        return (
            <div>
                <h1 className="text-center">Sign Up</h1>
                <form className="col-3 mx-auto" onSubmit={this.handleClick}>
                    <input className="form-control" type="text" name="name" placeholder="Name" />
                    <input className="form-control" type="text" name="email" placeholder="Email" />
                    <input className="form-control" type="password" name="password" placeholder="Password" />
                    <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" />
                    <button className="btn btn-success mx-auto">Submit</button>
                </form>
            </div>
        );
    }
}


export default SignUp;
