import { useState, useEffect, React } from "react";
import './news.css'

export default function News() {
    const items = [0, 1, 2, 3]
    const items2 = [4, 5, 6, 7, 8, 9 ,10, 11, ]
    const [data, setdata] = useState({});
    const [topic, settopic] = useState();
    const api = {
        key: '63289eb8f7a24bebad31f348387ab107',
        base: 'https://newsapi.org/v2/everything?',
    }
    const pressed = () => {
        fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=63289eb8f7a24bebad31f348387ab107`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setdata(result);
            });
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            pressed();
        }
    };

    return (
        <div className='main-container' >
            <div >
                <input type="text"
                    className="topic-input"
                    placeholder="Enter your topic"
                    onChange={(e) => settopic(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {typeof data.articles != 'undefined' ?
                <div className="outer-container">
                    <div className="left-container">
                        <h1>Top Headlines</h1>
                        {items.map((item) => (
                            <>
                                <div className="news-item" >
                                <div style={{paddingRight: '0.3rem'}}>
                                    <h2><a href={data.articles[item].url}>{data.articles[item].title}</a></h2>
                                    <h5 style={{marginTop: '-0.8rem'}}>~{data.articles[item].author?data.articles[item].author:'Sources'}</h5>
                                    <p style={{fontFamily: 'times new roman'}}>{data.articles[item].description}</p>
                                </div>
                                <img src={data.articles[item].urlToImage} className='news-image' alt="image" />
                            </div>
                            <hr />
                            </>
                            
                        ))}

                    </div>
                    <div className="right-container">
                        <h3>Other News</h3>
                        {items2.map((item) => (
                            <div>
                                <p><a href={data.articles[item].url}>{data.articles[item].title}</a></p>
                                <hr></hr>
                            </div>
                        ))}
                    </div>

                </div> :
                <p></p>
            }

        </div>
    );
}
