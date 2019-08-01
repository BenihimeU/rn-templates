import React from 'react';
import Video from './Video';

const VideoList = ({ videos, OnItemClick }) => {

    const renderVideoList = () => {
        return videos.map((item) => {
            return <Video
                key={item.id.videoId}
                video={item}
                OnClick={OnItemClick}
            ></Video>
        });
    }

    return <div className="video-list ui relaxed divided list">{renderVideoList()}</div>;
}

export default VideoList;