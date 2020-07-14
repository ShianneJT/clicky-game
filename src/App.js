import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json';


class App extends React.Component {
    state = {
        characters,
        score: 0,
        highScore: 0,
        clickMessage: 'Click an image to gain a point! But don\'t click the same image twice or you lose!'
    };

    handleImgClick = id => {
        const clickedImg = this.state.characters.filter(character => character.id === id);
        console.log('click')
            if (clickedImg[0].clicked) {
                console.log('Already clicked that one!');
                this.setState({
                    score: 0,
                    clickMessage: 'Sorry, you already clicked that one! Please try again.'
                });
            this.handleGameReset();

            } else {
                clickedImg[0].clicked = true;
                this.setState({ score: this.state.score + 1}, () => {
                    if(this.state.score > this.state.highScore) {
                        this.setState({ highScore: this.state.score });
                }
            });
                this.setState({clickMessage: 'Good job! Keep going!'})
                this.handleCardShuffle();
            }

    }

    handleCardShuffle = () => {
        let cards = this.state.characters;
        for (let i = 0; i < cards.length - 1; i++) {
            let j = i + Math.floor(Math.random() * (cards.length - i));

            const temp = cards[j];
            cards[j] = cards[i];
            cards[i] = temp;
        };
            this.setState({ characters: cards });
    };

    handleGameReset = () => {
        for (let i = 0; i < this.state.characters.length; i++) {
            characters[i].clicked = false;
            this.setState({
                score: 0,
                characters: characters
            });
            this.handleCardShuffle();
        };
    };

    render() {
        return (
            <Wrapper>
                <Header score={this.state.score} highScore={this.state.highScore} clickMessage={this.state.clickMessage}/>
                <div className="row">
                    {this.state.characters.map((character) => {
                        return <CharacterCard
                            key={character.id}
                            id={character.id}
                            image={character.image}
                            handleOnClick={this.handleImgClick}
                        />
                    })}
                </div>
            </Wrapper>
        );
    };

};

export default App;
