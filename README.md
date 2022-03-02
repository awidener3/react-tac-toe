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