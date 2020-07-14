import React from 'react';

const styles = {
    img: {
        height: 300
    }
}

class CharacterCard extends React.Component {

    render() {
        return (
            <div className="col-lg-2">
                <div className="card" onClick={this.handleCardClick}>
                    <div className="img-container" id={this.props.id}>
                        <img src={this.props.image} alt={this.props.name} style={styles.img}/>
                    </div>
                </div>
            </div>

        );
    };

};

export default CharacterCard;
