import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React Component #1: Square
class Square extends React.Component {
	// Renders a single button
	render() {
		return <button className="square">{/* TODO */}</button>;
	}
}

// React Component #2: Board
class Board extends React.Component {
	// Calls the Square React component
	renderSquare(i) {
		// pass a prop called 'value'
		return <Square value={i} />;
	}

	// Renders 9 squares
	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

// React Component #3: Game
class Game extends React.Component {
	// Renders a board with placeholder values
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
