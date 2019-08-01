import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './youtube';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail';
class App extends Component {

    state = { videos: [], selectedVideo: {} };
    OnSearchSubmit = async (keyword) => {
        const response = await youtube.get('search',
            {
                params: { q: keyword }
            });
        const { data: { items = [] } = {} } = response;
        this.setState({
            videos: items,
            selectedVideo: items[0]
        });
    }

    OnVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    componentDidMount(){
        this.OnSearchSubmit("cars");
    }

    render() {
        return (
            <div className="ui container segment">
                <SearchBar onSubmit={this.OnSearchSubmit}></SearchBar>
                <div className="ui segment">
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="nine wide column">
                                <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                            </div>
                            <div className="seven wide column">
                                <VideoList
                                    videos={this.state.videos}
                                    OnItemClick={this.OnVideoSelect}
                                ></VideoList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;