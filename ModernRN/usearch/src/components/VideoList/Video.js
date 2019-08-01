import React from 'react';
import './video.css';

const Video = ({ video, OnClick }) => {

    const OnVideoClick = (e) => {
        e.preventDefault();
        OnClick(video);
    };
    return (
        <div className="video item" onClick={OnVideoClick}>
            <img
                className="ui image"
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default Video;