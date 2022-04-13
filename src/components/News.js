import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        console.log("News Constructor");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9563edd417894fcaafdc56ad77758f3f";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }

    render() {
        return (
            <div className='container my-3'>
                <h3>NewsMonkey - Top Headlines</h3>
                <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url} >
                        <NewsItem 
                            title = {element.title? element.title: ""} 
                            description = {element.description? element.description: ""}
                            imageUrl = {element.urlToImage? element.urlToImage: "http://shorturl.at/apxLX"} 
                            newsUrl = {element.url} 
                        />
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default News
