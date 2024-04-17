import React, { Component } from 'react'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

// get: async () => {
//     const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//         }
//     });
//     if (!response.ok) {
//         throw new Error('Failed to fetch data from the server')
//     } return await response.json()
// }, 




export default class SignUp extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        {/* USE THE "name" attribute for each entry! */ }
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value

        const body = {
            username,
            email,
            password
        }

        const url = BACKEND_URL + '/api/signup'
        console.log(url)
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(body)
        }

        if (password !== confirmPassword) {
            // THROW AN ERROR
            console.log('passwords do not match');
            return
        }

        const response = await fetch(url, options)

        // const res = await fetch(url, options);
        // const data = await res.json();
        // console.log(data);

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        } const data = await response.json()
        console.log(data);

    };

    

    render() {
        return (
            <div>
                <h1 className="text-center">Sign Up</h1>
                <form className="col-3 mx-auto" onSubmit={this.handleSubmit}>
                    <input
                        className="form-control"
                        name="username"
                        placeholder="Username"
                    />
                    <input
                        className="form-control"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        className="form-control"
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        className="form-control"
                        name="confirmPassword"
                        placeholder="Confirm Your Password"
                    />
                    <button className="btn btn-success mx-auto">Submit</button>
                </form>
            </div>
        );
    }
}
