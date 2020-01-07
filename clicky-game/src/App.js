import React, { Component } from "react";
import TitleBar from "./components/TitleBar";
import GPKCard from "./components/GPKCard";
import gpk from "./cards.json";
import "./App.css";
import StatusBar from "./components/StatusBar";


class App extends Component
{
    state =
    {
        deck: [],
        score: 0,
        hiScore: 0,
        gameMessage: "Click an Image to Begin!"
    };

    //Runs after component is loaded.
    componentDidMount = () =>
    {
        this.shuffleDeck();
    }
    
    //Randomly shuffle the cards.
    shuffleDeck = () =>
    {
        let rndArray = [];
        let deck = [];

        while(rndArray.length < gpk.length)
        {
            let rnd = Math.floor(Math.random() * gpk.length);

            if(!rndArray.includes(rnd))
            {
                rndArray.push(rnd);
                deck.push(gpk[rnd]);
            }
        }

        this.setState({ deck: deck });
    }

    resetGame = () =>
    {
        this.shuffleDeck();

        this.setState(
        { 
            score: 0,
            hiScore: 0,
            gameMessage: "Click an Image to Begin!"
        });
    }

    //Check card click and randomize cards.
    clickCard = () =>
    {
        this.shuffleDeck();
    }

    render = () =>
    {
        return (
            <div id="page-body">
                <TitleBar />
                <div className="container">
                    <StatusBar
                        key={100}
                        resetGame={this.resetGame}
                        message={this.state.gameMessage}
                        score={this.state.score}
                        hiScore={this.state.hiScore}
                    />
                    
                    {this.state.deck.map(card => (
                        <GPKCard
                            clickCard={this.clickCard}
                            id={card.id}
                            key={card.id}
                            name={card.name}
                            image={card.image}
                    />
                ))}
                </div>
            </div>
        );
    }
}

export default App;
