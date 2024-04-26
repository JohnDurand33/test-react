import React, { useEffect, useState } from 'react';
import Article from './Article';

const NewsFunction = () => {

    //SYNTAX: const [stateVariable, setStateFunction] = useState(initialValue);
    const [articles, setArticles] = useState([]);

    //SYNTAX: useEffect(callbackFunction, [arrayOfDependencies]) - if empty array, it will only run once, if there are dependencies, it will run every time the dependencies change
    useEffect(() => {
        getArticles()
    }, []); // this empty array is the same as componentDidUpdate in class component

    const getArticles = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=94395f0984e7482bbde6fe3511976ab3');
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok') {
            setArticles(data.articles)
        }
    };

    const showArticles = () => {
        return articles.map((a, index) => <Article key={index} article={a} />)

    }
    return (
        <div>
            <h1>News Page</h1>
            <main className="row">
                {showArticles()}
            </main>
        </div>
    )
}

export default NewsFunction