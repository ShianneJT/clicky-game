import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import characters from './characters.json';


class App extends React.Component {
    state = {
        characters,
        score: 0,
        highScore: 0,
        clickMessage: 'Click an image to gain a point! But don\'t click the same image twice or you lose!'
    };

    handleImgClick = id => {
        const cardHolder = document.querySelector('#card-holder');
        const clickMsg = document.querySelector('#click-msg');
        clickMsg.classList.remove();
        cardHolder.classList.remove('shake');
        const clickedImg = this.state.characters.filter(character => character.id === id);
        // if clickedImg = true, send click message and reset the game
        if (clickedImg[0].clicked) {
            cardHolder.classList.add('shake');
            this.setState({
                score: 0,
                clickMessage: 'You clicked that one already!'
            });
            this.handleGameReset();
        // if score is less than 11, set the state of the card to true (clicked), increment the current score by 1
        } else if (this.state.score < 11 ) {
            clickedImg[0].clicked = true;
            this.setState({ score: this.state.score + 1 }, () => {
                // if current score is higher than high score, update high score
                if (this.state.score > this.state.highScore) {
                    this.setState({ highScore: this.state.score });
                }
            });
            this.setState({ clickMessage: 'Good job! Keep going!' });
            this.handleCardShuffle();
        // if this is the last card being clicked on, update states and reset game
        } else {
            clickedImg[0].clicked = true;
            clickMsg.classList.add('animate__animated', 'animate__bounce');
            this.setState({
                score: 0,
                highScore: 12,
                clickMessage: 'You got them all! Play again?' });
            this.handleGameReset();
        };
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
                <Header score={this.state.score} highScore={this.state.highScore} clickMessage={this.state.clickMessage} />
                <div id="card-holder">
                    {this.state.characters.map((character) => (
                        <CharacterCard
                            key={character.id}
                            id={character.id}
                            image={character.image}
                            handleOnClick={this.handleImgClick}
                        />
                    ))}
                </div>
                <Footer />
            </Wrapper>
        );
    }
}

export default App;
