import React from 'react';
import './style.css';

class Header extends React.Component {
    render() {
        return (
            <>
            <div class="header"></div>
            <nav class="navbar">
                <h4>Clicky Game!</h4>
                <h5>{this.props.clickMessage}</h5>
                <h4 className="">Score: {this.props.score} || High Score: {this.props.highScore}</h4>
            </nav>
            </>
        );
    };
};

export default Header;
