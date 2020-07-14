import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json';


class App extends React.Component {
    state = {
        characters
    };

    render() {
        return (
            <Wrapper>
                <Header />
                {this.state.characters.map(character => (
                    <CharacterCard
                        key={character.id}
                        image={character.image}
                    />
                ))}
            </Wrapper>
        )
    }

}

export default App;
