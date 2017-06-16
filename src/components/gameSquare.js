import React, { Component } from 'react';

class GameSquare extends Component {
  render(){
    const {player, selectSquare, coord} = this.props;
    return (
        <div id={coord} onClick={selectSquare} className={"game-square player" + player}>
        </div>
    );
  }
}

export default GameSquare;
