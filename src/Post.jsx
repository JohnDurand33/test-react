import React, { Component } from "react";

class Post extends Component {
    render() {
        const p = this.props.post
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={p.img_url ?? "https//placeholder.com/150"}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">{p.caption}</p>
                </div>
            </div>
        );
    }
};


export default Post;

