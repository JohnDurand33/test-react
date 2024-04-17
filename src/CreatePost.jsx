import React, { Component } from "react";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export default class CreatePost extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        {/* USE THE "name" attribute for each entry! */}
        const title = e.target.title.value;
        const caption = e.target.caption.value;
        const imgUrl = e.target.imgUrl.value

        const body = {
            title,
            img_url: imgUrl,
            caption,
            user_id: 1 
        }
        // eslint-disable-next-line
        {/* HARDCODED USER_ID< WILL UPDATE THIS TOMORROW */}
        const url = BACKEND_URL + '/api/posts/create'
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(body)
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);

    };

    render() {
        return (
            <div>
                <h1 className="text-center">Create Post</h1>
                <form className="col-3 mx-auto" onSubmit={this.handleSubmit}>
                    <input
                        className="form-control"
                        name="title"
                        placeholder="Title"
                    />
                    <input
                        className="form-control"
                        name="caption"
                        placeholder="Caption"
                    />
                    <input
                        className="form-control"
                        name="imgUrl"
                        placeholder="Image Url"
                    />
                    <button className="btn btn-success mx-auto">Submit</button>
                </form>
            </div>
        );
    }
}
