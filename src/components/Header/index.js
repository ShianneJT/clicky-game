import React from 'react';
import './style.css';

class Header extends React.Component {
    render () {
        return (
            <>
                <div className="header"></div>
                <nav className="navbar">
                    <h3>Clicky Game!</h3>
                    <h3 className="clickMsg">{this.props.clickMessage}</h3>
                    <h3 className="">Score: {this.props.score} | High Score: {this.props.highScore}</h3>
                </nav>
            </>
        );
    };
};

export default Header;
