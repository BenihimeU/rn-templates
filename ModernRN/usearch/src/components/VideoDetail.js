import React from 'react';

const VideoDetail = ({ video }) => {
    if (video && video.snippet) {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div className="video-detail ui segments">
                <div className="ui embed">
                    <iframe
                        title="video player"
                        width="560"
                        height="315"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        src={videoSrc}>
                    </iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
    return <div>Loading...</div>


}

export default VideoDetail;