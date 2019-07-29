import React from 'react';
import Photo from './photo';
import './ImageList.css';


const ImageList = ({ photos }) => {
    const PhotosTemplate = photos.map(photo => {
        return <Photo key={photo.id} photo={photo}></ Photo>
    });
    return (<div className="ui segment image-list">
        {PhotosTemplate}
    </div>
    );
}

export default ImageList;