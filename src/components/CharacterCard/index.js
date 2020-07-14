import React from 'react';

const styles = {
    img: {
        height: 300
    }
}

class CharacterCard extends React.Component {

    render() {
        return (
            <img src={this.props.image} alt={this.props.name} style={styles.img}/>
        );
    };
};

export default CharacterCard;
