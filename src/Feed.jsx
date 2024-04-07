import React, { Component } from "react";

export default class Feed extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    };

    showPosts = () => {
        return this.state.posts.map(p => <Post key={p.id} post={p} />)
    };


    render() {
        return (
            <div>
                <h1>My Feed</h1>
                <main>
                    { this.showPosts()}
                </main>
            </div>
        );
    }
}