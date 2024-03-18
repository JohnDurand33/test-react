import React, { Component } from "react";
import Post from './Post'

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
                articles: data.articles
            })
        }
    };

    showArticles = () => {
        return this.state.articles.map((a, index) => <Post key={index} article={a}/>)
    }

	render(props) {
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

// Login information should be in the app folder, because information can be passed down, but not up!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//