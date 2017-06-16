import React, { Component } from 'react';
import logo from './logo.svg';
import GameSquare from './components/gameSquare';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPlayer: '1',
            a1: '0',
            a2: '0',
            a3: '0',
            a4: '0',
            a5: '0',
            a6: '0',
            a7: '0',
            a8: '0',
            a9: '0',
        };
    }

    selectSquare = (event) => {
        const {id} = event.target;
        const {currentPlayer} = this.state;
        if (this.state[id] === '0') {this.setState({
            [id]: currentPlayer,
            currentPlayer: currentPlayer === '1' ? '2' : '1',
        });
        }
    }

    render() {
        const {a1, a2, a3, a4, a5, a6, a7, a8, a9, currentPlayer} = this.state;
        return (
            <div className="App">
                <p className="App-intro">
                    Player {currentPlayer}, it's your turn!
                </p>
                <div>
                    <GameSquare coord="a1" selectSquare={this.selectSquare} player={a1}/>
                    <GameSquare coord="a2" selectSquare={this.selectSquare} player={a2}/>
                    <GameSquare coord="a3" selectSquare={this.selectSquare} player={a3}/>
                </div>
                <div>
                    <GameSquare coord="a4" selectSquare={this.selectSquare} player={a4}/>
                    <GameSquare coord="a5" selectSquare={this.selectSquare} player={a5}/>
                    <GameSquare coord="a6" selectSquare={this.selectSquare} player={a6}/>
                </div>
                <div>
                    <GameSquare coord="a7" selectSquare={this.selectSquare} player={a7}/>
                    <GameSquare coord="a8" selectSquare={this.selectSquare} player={a8}/>
                    <GameSquare coord="a9" selectSquare={this.selectSquare} player={a9}/>
                </div>
            </div>
        );
  }
}

export default App;
