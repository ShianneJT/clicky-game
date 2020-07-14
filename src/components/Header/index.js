import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <h1>Clicky Game!</h1>
                <p>Score: {this.props.score}</p>
                <p>High Score: {this.props.highScore}</p>
                <p>{this.props.clickMessage}</p>
            </div>
        )
    }
}

export default Header;
