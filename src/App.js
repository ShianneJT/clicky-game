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

    handleCardClick = id => {
        // do stuff
    }

    handleCardShuffle = () => {

    }

    resetStates = () => {

    }

    // handle click
    // handle card shuffle
    // reset states


    render() {
        return (
            <Wrapper>
                <Header score={this.state.correctGuesses} topScore={this.state.topScore}/>
                <div className="row">
                    {this.state.characters.map(character => (
                        <CharacterCard
                            key={character.id}
                            image={character.image}
                            handleCardClick={this.handleCardClick}
                        />
                    ))}
                </div>

            </Wrapper>
        )
    }

}

export default App;
