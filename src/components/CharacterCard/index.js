/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './style.css';

class CharacterCard extends React.Component {

    handleImgClick = () => {
        this.props.handleOnClick(this.props.id);
    };

    render() {
        return (
            <div className="card">
                <div className="img-container" id={this.props.id}>
                    <img src={this.props.image} alt={this.props.name} onClick={this.handleImgClick}/>
                </div>
            </div>
        );
    };

};

export default CharacterCard;
