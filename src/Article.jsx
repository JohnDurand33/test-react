import React, { Component } from "react";
import Moment from "react-moment";

export default class Article extends Component {
    render() {
        const { article } = this.props;
        return (
            <div
                className="card mx-auto mb-5 d-flex flex-column"
                style={{ width: "18rem", height: "100%", overflow: "hidden", justifyContent:"space-between" }}
            >
                <img
                    src={article.urlToImage ?? "https://placeholder.com/150"}
                    style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                    }}
                    className="card-img-top d-flex flex-column card"
                    alt="..."
                />
                <div className="card-body d-flex flex-column p-0">
                    <h5 className="card-title m-1">{article.title}</h5>
                    <h6 className="card-subtitle m-1 text-body-secondary">
                        {article.author}
                    </h6>
                    <p
                        className="card-text m-1 rounded-4 flex-grow-1"
                        style={{
                            overflow: "auto",
                            maxHeight: "200px",
                        }}
                    >
                        {article.description}
                    </p>
                    <a id="url-link"href={article.url} target='' className="btn btn-success" style={{maxWidth: "150px"}}>Full Story</a>
                    <div class="card-footer m-0 text-body-secondary rounded-5 sticky-bottom">
                        <Moment id="p-footnote" fromNow={true}>{article.date_created}</Moment>
                    </div>
                </div>
            </div>
        );
    }
}
