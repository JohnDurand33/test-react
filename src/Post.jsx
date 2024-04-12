import React, { Component } from "react";
import Moment from "react-moment";
import "./main.css";


class Post extends Component {
    render() {
        const { post } = this.props
        return (
            <div
                className="card mx-auto mb-5"
                style={{ width: "18rem" }}
            >
                <img
                    src={post.img_url ?? "https//placeholder.com/150"}
                    className="card-img-top card"
                    alt="..."
                />
                <div className="card-body p-0">
                    <h5 className="card-title m-1">{post.title}</h5>
                    <h6 className="card-subtitle m-1 text-body-secondary">
                        {post.author}
                    </h6>
                    <p className="card-text m-1 rounded-4">{post.caption}</p>
                    <div class="card-footer m-0 text-body-secondary rounded-5">
                        <Moment fromNow={true}>{post.date_created}</Moment>
                    </div>
                </div>
            </div>
        );
    };
}


export default Post;

