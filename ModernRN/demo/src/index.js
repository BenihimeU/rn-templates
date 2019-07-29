// Import react and react-dom
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function getText() {
    const Greeting = "Hello"
    return Greeting;
}
// Create Component
class App extends Component {
    render() {
        const styles = {
            backgroundColor: 'blue',
            color: 'white'
        };
        return (
            <div>
                <label className="label" htmlFor="name"> Name</label>
                <input id="name"></input>
                <button style={styles}>{`${getText()} Jason`}</button>
            </div>
        );
    }
}

//Functional Component
// const App = () => <div>DemoApp</div>;

// Show component on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);