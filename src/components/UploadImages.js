import React, { useState, useEffect } from 'react'

const UploadImages = ({onUpload}) => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)))
        setImageURLs(newImageURLs);
    }, [images]); 

    useEffect(() => {
        onUpload(imageURLs[0]);
    }, [imageURLs])

    function onImageChange(event) {
        setImages([...event.target.files]);
    }

    return (
        <>
            <input className="form__element" type="file" 
                accept="image/*" onChange={onImageChange} 
                />
             {imageURLs.length > 0 && <img src={imageURLs[0]} alt="Profile" />}
        </>
    )
}

export default UploadImages