import { Component } from 'react';
import './main.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

class Logout extends Component {

    handleClick = async (e) => {
        e.preventDefault();

        const url = BACKEND_URL + '/api/logout'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.user.token}`
            },
        }

        const request = await fetch(url, options);
        const data = await request.json();

        if (data.status === 'ok') {
            console.log(`Logging Out User'`)
            this.props.logMeOut()
            console.log('data:', data)
        } else {
            console.log('Logout failed')
        }

    };
    render() {
        return (
            <>
                <button onClick={this.handleClick} className="btn btn-success m-auto">Log Out</button>
            </>
        );
    }
};


export default Logout;