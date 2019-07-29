import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './youtube';
class App extends Component {

    state = { videos: [] }
    OnSearchSubmit = async (keyword) => {
        const response = await youtube.get('search',
            {
                params: { q: keyword }
            });
        const { data: { items = [] } = {} } = response;
        this.setState({ videos: items });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.OnSearchSubmit}></SearchBar>
            </div>
        )
    }
}

export default App;