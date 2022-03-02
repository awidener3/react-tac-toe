import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React Component #1: Square
// class Square extends React.Component {
// * (4) Constructor to add state to the component
// * (9) Remove constructor, square no longer keeps track of game state
// constructor(props) {
// 	// Always call super() in a constructor
// 	super(props);
// 	// Initialize state
// 	this.state = {
// 		value: null,
// 	};
// }

// * (1) Renders a single button
// render() {
// * (2) Pass in value of i as text
// return <button className="square">{this.props.value}</button>;

// return (
// * (3) onClick adds listener to each square, must be a function!
// <button
// 	className="square"
// 	onClick={() => {
// 		console.log('click');
// 	}}
// >
// 	{this.props.value}
// </button>

// * (5) Replace `this.props.value` with `this.state.value`
// * Change onClick func to set that state to 'X'
// <button
// 	className="square"
// 	onClick={() => {
// 		this.setState({ value: 'X' });
// 	}}
// >
// 	{this.state.value}
// </button>

// * (11) Replace this.state.value with this.props.value
// * Replace setState() with props.onClick()
// 			<button
// 				className="square"
// 				onClick={() => {
// 					this.props.onClick();
// 				}}
// 			>
// 				{this.props.value}
// 			</button>
// 		);
// 	}
// }

// React Component #1: Square (rewritten)
// * (13) Square component rewritten using function component
// Be sure to remove `this`!
function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

// React Component #2: Board
class Board extends React.Component {
	// * (6) Add constructor to set initial state
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			// * (14) Add xIsNext to help track turn
			xIsNext: true,
		};
	}

	// * (12) Define handleClick
	// handleClick(i) {
	// 	// .slice() makes a copy of the squares array to modify
	// 	const squares = this.state.squares.slice();
	// 	squares[i] = 'X';
	// 	this.setState({ squares: squares });
	// }

	// * (15) Update handleClick to flip boolean on xIsNext
	handleClick(i) {
		const squares = this.state.squares.slice();
		// * (19) Add in logic to check for a winner
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		// Add logic to change X or O
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares: squares,
			// Flips boolean
			xIsNext: !this.state.xIsNext,
		});
	}

	// Calls the Square React component
	renderSquare(i) {
		// pass a prop called 'value'
		// return <Square value={i} />;

		// * (7) Add prop passing to instruct square of its current value (X, O, null)
		// return <Square value={this.state.squares[i]} />;

		// * (8) Pass down function to handle square state, since component state is private
		return (
			<Square
				value={this.state.squares[i]}
				onClick={() => this.handleClick(i)}
			/>
		);
	}

	// Renders 9 squares
	render() {
		// * (16) Update status text to reflect turn
		// const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

		// * (18) Update status text to also show winner
		const winner = calculateWinner(this.state.squares);
		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}

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

// * (17) logic to declare winner
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
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}
