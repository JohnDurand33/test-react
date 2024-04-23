
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
            caption
            // user_id: this.props.user.id - insecure, so pass current user props to this component from App.js, and put token into the header (below)
        }
        console.log('fe-body defined successfull no fetch yet')
        const url = `${BACKEND_URL}/api/posts/create`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.user.token}`
            },
            body: JSON.stringify(body),
        };
        console.log(`fe-request defined successfull no fetch yet, options: ${JSON.stringify(options)}`)
        const res = await fetch(url, options);
        if (res.ok) {
            console.log('Response Received Successfully');
        } else {
            console.log('Response Failed in CreatePost.jsx')
        }
        const data = await res.json();
        if (data.status === 'ok') {
            console.log(data, 'Post created successfully');
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

