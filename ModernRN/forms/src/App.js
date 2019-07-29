import React from 'react';
import API from './utils/api';
import SearchBar from './components/SeachBar';
import ImageList from './components/ImageList';

class App extends React.Component {
    state = { photos: [] };
    onSearchSubmit = async (keyword) => {
        const response = await API.get(`search/photos`, {
            params: { query: keyword }
        });
        const { data: { results } } = response;
        this.setState({ photos: results });
    }

    render() {
        return (<div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
            <ImageList
                photos={this.state.photos}>
            </ImageList>
        </div>
        );
    }
}

export default App;