import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json';


class App extends React.Component {
    state = {
        characters,
        correctGuesses: 0,
        topScore: 0,
    };

    handleImgClick = id => {
        const clickedImg = this.state.characters.filter(character => character.id === id);
        console.log('click')
            if (clickedImg[0].clicked) {
                console.log('Already clicked that one!');
                this.setState({
                    correctGuesses: 0,
                });
                this.handleCardShuffle();
            }
            this.handleCardShuffle();
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


    // handleImgClick = id => {
    //     // check if clicked is false
    //     // if so, set to true
    //     // add point
    //     // shuffle cards

    //     // if clicked
    //     // set top score
    //     // reset everything

    //     const clickedCharacter = this.state.characters.filter(characters => characters.id === id);
    //         if(clickedCharacter[0].clicked) {

    //         }
    // }



    // handle click
    // handle card shuffle
    // reset states


    render() {
        return (
            <Wrapper>
                <Header score={this.state.correctGuesses} topScore={this.state.topScore}/>
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
