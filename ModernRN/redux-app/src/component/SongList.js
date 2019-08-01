import React, { Component } from 'react';
import { connect } from 'react-redux';
import { seleteSong } from '../redux/actions';

class SongList extends Component {

    renderSongsList = () => {
        return this.props.songs.map(song => {
            const { title, duration } = song;
            return (
                <div className="song item" key={title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => { this.props.seleteSong(song);} }
                        >Select</button>
                    </div>
                    <div className="content">{title}</div>
                    <div className="content">{duration}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="song-list ui divided list">
            {this.renderSongsList()}
        </div>
    }
}

const mapStateToProps = (state, oldProps) => {
    const { songs = [] } = state;
    console.log(state);
    return { songs };
}

export default connect(
    mapStateToProps,
    { seleteSong }
)(SongList);