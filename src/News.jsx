import React, { Component } from "react";
import Article from "./Article";

export default class News extends Component {
	constructor() {
		super()
		this.state = {
            articles: []
        }
    };

    componentDidMount(){
        this.getArticles()
    }

    getArticles = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=94395f0984e7482bbde6fe3511976ab3');
        const data = await res.json();
        if (data.status === 'ok'){
            this.setState({
                articles: data.articles // this is based on the API data returned.  'articles' is a key inside the initial data JSON object returned
            })
        }
    };

    showArticles = () => {
        return this.state.articles.map((a, index) => <Article key={index} article={a}/>)
    }

	render() {
		return (
			<div>
				<h1>News Page</h1>
				<main className="row">
					{this.showArticles()}
				</main>
			</div>
        )
    }
}

// Login information should be in the app folder, because information can be passed down, but not up!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!