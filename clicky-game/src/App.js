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
        clickedIds: [],
        score: 0,
        hiScore: 0,
        gameMessage: "Click an Image to Begin!",
        clickResult: "reset"
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
            clickedIds: [],
            score: 0,
            hiScore: 0,
            gameMessage: "Click an Image to Begin!",
            clickResult: "reset"
        });
    }

    //Check card click and randomize cards.
    clickCard = (id) =>
    {
        let score = this.state.score + 1;
        let hiScore = this.state.hiScore;
        let clickedIds = [];

        //Copy clickedId array to new array.
        for(let i = 0; i < this.state.clickedIds.length; i++)
        {
            clickedIds.push(this.state.clickedIds[i]);
        }

        if(hiScore < score)
        {
            hiScore = score;
        }

        if(clickedIds.includes(id))
        {
            this.setState(
            { 
                clickedIds: [],
                score: 0,
                gameMessage: "Already Clicked!",
                clickResult: "bad"
            });
        }
        else
        {
            clickedIds.push(id);

            this.setState(
            { 
                clickedIds: clickedIds,
                score: score,
                hiScore: hiScore,
                gameMessage: "Good Guess!",
                clickResult: "good"
            });
        }

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
                        clickResult={this.state.clickResult}
                        resetGame={this.resetGame}
                        message={this.state.gameMessage}
                        score={this.state.score}
                        hiScore={this.state.hiScore}
                    />
                    
                    {this.state.deck.map(card =>
                    (
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
