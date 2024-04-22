import React, { Component } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Moment from 'react-moment';
import './main.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
class Post extends Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
    }

    componentDidMount() {
        console.log(this.props.post)
        if (this.props.post) {
            this.setState({ liked: this.props.post.liked })
        }
    }

    handleClick = async (type) => {
        const currentState = this.state.liked;
        this.setState({
            liked: !currentState
        })


        let url;
        if (type === 'like') {
            url = BACKEND_URL + '/api/posts/like/' + this.props.post.id;
        } else {
            url = BACKEND_URL + '/api/posts/unlike/' + this.props.post.id;
        }

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.user.token}`
            },
        },
        );

        const data = await res.json();
        console.log(data);
        if (data.status === 'ok') {
            this.setState({ liked: !currentState })
        }
    };

    render() {

        const p = this.props.post;
        console.log(p)
        return (
            <div className="card mx-auto mb-5" style={{ width: '18rem' }}>
                <img
                    src={p.img_url ?? 'https://placeholder.com/150'}
                    className="card-img-top card"
                    alt="..."
                />
                <div className="card-body p-0">
                    <h5 className="card-title m-1">{p.title}</h5>
                    <h6 className="card-subtitle m-1 text-body-secondary">{p.author}</h6>
                    <p className="card-text m-1 rounded-4">{p.caption}</p>
                    {this.state.liked ?
                        <AiFillHeart onClick={() => this.handleClick('unlike')} />
                        :
                        <AiOutlineHeart onClick={() => this.handleClick('like')} />
                    }
                    <div
                        class="card-footer m-0 text-body-secondary rounded-5"
                        style={{ display: 'flex', justifyContent: 'center' }}>
                        <Moment id="a-footnote" fromNow>
                            {p.date_created}
                        </Moment>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
