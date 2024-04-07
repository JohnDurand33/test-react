import React, { Component } from "react";
import Post from "./Post";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
export default class Feed extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    };

    componentDidMount = () => {
        this.getPosts();
    }

    getPosts = async () => {
        const res = await fetch(BACKEND_URL + '/api/posts');
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data);
        if (!data.status === 'ok') {
            throw new Error("Issue with data");
        } else {
            this.setState({
                posts: data.posts
            })
        }
    }

    showPosts = () => {
        return this.state.posts.map(p=> <Post key={p.id} post={p} />)
    };


    render() {
        return (
            <div>
                <h1>My Feed</h1>
                <main>
                    { this.showPosts() }
                </main>
            </div>
        );
    }
}