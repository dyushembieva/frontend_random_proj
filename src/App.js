import React, { Component } from 'react';
import './App.css';

class RandomQuoteMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'We become unknown ',
            // author: 'Unknown',
            randomNumber: 0,
            color: {'color':  '#000'},
            backgroundColor: {'backgroundColor':  '#000'},
            currentQuote :'',
            currentAuthor: '',
            quotes: ''
        }
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(function(response) {
                return response.json();
            })
            .then((quote) => {
                this.setState({
                    quotes: quote
                })
            })
    }

    onChangeColor = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        this.setState({
            color:  {'color':  ` rgb(${[r,g,b].join(',')}  )`},
            backgroundColor: {'backgroundColor':  ` rgb(${[r,g,b].join(',')}  )`},
        })
    };

    onClickHandler = () => {
        this.onChangeColor();
        let randomNumberOfText = Math.floor(Math.random() *   this.state.quotes.quotes.length);

        this.setState({
            title: this.state.quotes.quotes[randomNumberOfText].quote ,
            author: this.state.quotes.quotes[randomNumberOfText].author
        });
    };

    render() {
        return (
            <div className="content" style={this.state.backgroundColor}>
                <div className="content__quote-box">
                    <div className="quote-box">
                        <div className="quote-box__title" style={this.state.color}>
                            <i className="fa fa-quote-left fa-1x"></i> {this.state.title}
                        </div>
                        <div className="quote-box__author" style={this.state.color}>- {this.state.author}</div>
                        <div className="quote-box__footer">
                            <div className="footer">
                                <div className="footer__social">
                                    <div className="social">
                                        <ul>
                                            <li><a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" style={this.state.backgroundColor} className="fa fa-twitter"></a></li>
                                            <li><a href="https://www.tumblr.com/login" target="_blank" id="tumblr-quote" style={this.state.backgroundColor} className="fa fa-tumblr"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer__button">
                                    <button onClick={this.onClickHandler} className="button" style={this.state.backgroundColor}>New quote</button>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomQuoteMachine;
