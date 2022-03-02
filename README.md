# React-Tac-Toe

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

## 🔨 Tasks

This project serves as an introduction into React, where I will follow along the official [reactjs.org tutorial](https://reactjs.org/tutorial/tutorial.html) for getting started with React. These will also serve as personal notes where I will be collecting important information into one project to refer back to.

## 📝 Notes

### 🧩 React & Components

JavaScript **library** for building user interfaces by creating complex layouts from small pieces of code called components
  * **React**: JavaScript Library for UI
  * **Component**: Piece of code in React used to make UI via virtual DOM
  
Components allow the DOM to "update" efficiently and re-render the page. One way to create a component is with a `React.Component` subclass.

```js
class Card extends React.Component {
    render() {
        // Can only return one thing, but can be nested within div
        return (
            <div className="card">
                <h1>{this.props.title}</h1>
                <p>Card text goes here...</p>
            </div>
        );
    }
}

// Usage: <Card title="Card Title">
```

Card is a **React component class/type** which takes in the parameter `title`, which is a `prop` or property. props can be called whatever you want and are used within curly braces `{}`.

`render()` returns a **React element** which describes what will be rendered.

The text within the `return()` is called **JSX**, which is essentially a representation of HTML inside of JavaScript.

### State

State is how React elements "remember" things in a program (i.e. has the element been clicked?).

State can be defined in the components constructor and are *private* to a React component that it's defined in.

> There are other, simpler ways to do this outside of a JavaScript class.

```js
class Square extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            value: null,
        }
    }

    // methods, render, etc...
}
```
> When using a constructor/JavaScript classes, always start with a `super(props)` call

To adjust state, you can use an `onClick()` within the `render()` to `setState`

```js
class Square extends React.Component {
    
    // ...

    return(
        <button 
            className="square" 
            onClick={() => { 
                this.setState({value: 'X'})
            }}
        >
            {this.state.value}
        </button>
    )
}
```

`this.setState` essentially re-renders that individual square whenever it is clicked.

### Lifting State

Lifting state is when you take a state of a component and pass it **upwards** to it's parent. In this example, the `Square` components parent is the `Board`. This is how we can track the game itself.

### Immutability

Immutability is when an original object is left in it's original state and a "copy" is created when it is modified. This allows for features like:
* Game history
* Undo/Redo

It allows changes to be detected easily, since you have the original copy to reference.

In React, it helps build *pure components*

### Function Components

Function components are a simpler way to write components that only contain a render method and don't have their own state.

```js
// Class component
class Square extends React.Component {
    render() {
        return (
            <button
				className="square"
				onClick={() => {
					this.props.onClick();
				}}
			>
				{this.props.value}
			</button>
		);
    }
}

// Function component
function Square(props) {
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
```