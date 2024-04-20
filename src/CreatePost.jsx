
import React, { Component } from 'react';


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

class CreatePost extends Component {
    handleClick = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const caption = e.target.caption.value;
        const imgUrl = e.target.imgUrl.value;

        const body = {
            title,
            img_url: imgUrl,
            caption,
            // user_id: this.props.user.id - insecure, so pass current user props to this component from App.js, and put token into the header (below)
        }

        const url = BACKEND_URL + '/api/posts/create'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.user.token}`
            },
            body: JSON.stringify(body),
        };

        const res = await fetch(url, options);
        const data = await res.json();
        if (data.status === 'ok') {
            console.log(data);
        } else {
            console.log('Issue with CreatePost.jsx')
        }
    };

    render() {
        return (
            <div>
                <h1 className="text-center">Create Post</h1>
                <form className="col-3 mx-auto" onSubmit={this.handleClick}>
                    <input className="form-control" name="title" placeholder="Title" />
                    <input className="form-control" name="caption" placeholder="Caption" />
                    <input className="form-control" name="imgUrl" placeholder="Image Url" />
                    <button className="btn btn-success mx-auto">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreatePost;

