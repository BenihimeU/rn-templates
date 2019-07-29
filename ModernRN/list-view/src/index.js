import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './ component/SeasonDisplay';
// import faker from 'faker';
// import Comment from './ component/Comment';
// import ApproveCard from './ component/ApproveCard';

// const COMMENTS = [{
//     avatar: faker.image.avatar(),
//     author: "Jason",
//     text: " Writing is cool",
//     date: "6.00PM"
// }, {
//     avatar: faker.image.avatar(),
//     author: "Jason",
//     text: " Writing is cool",
//     date: "6.00PM"
// }];

class App extends Component {

    state = { latitude: 0, longitude: 0, errorMessage: "" };

    componentDidMount() {
        this.getCurrentLocation();
    }

    getCurrentLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({ latitude, longitude });
            },
            ({ message }) => {
                this.setState({ errorMessage: message });
            }
        );
    }

    render() {
        return <SeasonDisplay props={this.state}></SeasonDisplay>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);