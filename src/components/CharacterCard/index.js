import React from 'react';

const styles = {
    img: {
        height: 300
    }
}

class CharacterCard extends React.Component {

    handleImgClick = () => {
        this.props.handleOnClick(this.props.id);
    };

    render() {
        return (
            <div className="col-lg-2">
                <div className="img-container" id={this.props.id}>
                    <img src={this.props.image} alt={this.props.name} style={styles.img} onClick={this.handleImgClick}/>
                </div>
            </div>
        );
    };

};

export default CharacterCard;
