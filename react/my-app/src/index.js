import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Toggle extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.isToggleOn ? 'ASC' : 'DESC'}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />;
  }

  renderBoard() {
    let divs = [];
    for (let i = 0; i < 3; i++) {
      let rows = [];
      for (let j = 0; j < 3; j++) {
        rows.push(this.renderSquare(i*3 + j));
      }
      divs.push(<div className="board-row">{rows}</div>);
    }
    return divs;
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      position: [0],
      stepNumber: 0,
      xIsNext: true,
      selected: false,
      isToggleOn: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const position = this.state.position.slice(0, this.state.stepNumber);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(prevState => ({
      history: history.concat([{
        squares: squares,
      }]),
      position: position.concat(i),
      stepNumber: history.length,
      xIsNext: !prevState.xIsNext,
      selected: false,
    }));
  }

  handleToggle() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      selected: true,
    });
  }

  setFontWeight(selected, stepNumber, move) {
    if (this.isSelectedMove(selected, stepNumber, move)) {
      return 'bold';
    }
    return 'normal';
  }

  isSelectedMove(selected, stepNumber, move) {
    return selected && stepNumber === move;
  }

  render() {
    const history = this.state.history;
    const position = this.state.position;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const selected = this.state.selected;
    const stepNumber = this.state.stepNumber;
    const isToggleOn = this.state.isToggleOn;

    const movesList = history.map((step, move) => {
      const fontWeight = this.setFontWeight(selected, stepNumber, move);
      const desc = move ?
        'Go to move #' + move + ' ' + calculateRowCol(position[move - 1]) :
        'Go to game start';
      return (
        <li key={move}>
          <button style={{'fontWeight': fontWeight}} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    const moves = isToggleOn ? movesList : movesList.reverse();

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>
            <Toggle
              isToggleOn={isToggleOn}
              onClick={() => this.handleToggle()}
            />
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function calculateRowCol(i) {
  const row = Math.floor(i/3) | 0;
  const col = i%3 | 0;
  return '(' + row + ', ' + col + ')';
}
