import React, { Component } from "react";

export default class CreatePost extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        {
            /* USE THE "name" attribute for each entry! */
        }
        const title = e.target.title.value;
        const caption = e.target.caption.value;
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
