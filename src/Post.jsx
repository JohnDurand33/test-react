import React, { Component } from 'react'

export default class Post extends Component {
    // constructor() {
    //     super();
    //     this.state = null
    // }

    render() {
        const p = this.props.post;
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={p.urlToImage ?? "https//placeholder.com/150"}
                    ClassName="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5
                        ClassName="card-title"
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        {p.title}
                    </h5>
                    <p ClassName="card-text">{p.description}</p>
                </div>
            </div>
        );
    }
}
