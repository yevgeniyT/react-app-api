import React, { useState, useEffect } from 'react'

const UploadImages = ({onUpload}) => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)))
        setImageURLs(newImageURLs);
    }, [images])

    useEffect(() => {
        onUpload(imageURLs[0])
    }, [imageURLs])

    // YAY it works
    // can't ve use prevState
    // 
    //
    //
    function onImageChange(event) {
        setImages([...event.target.files]);
    }

    return (
        <>
            <input className="form__element" type="file" accept="image/*" onChange={onImageChange} />
            {imageURLs.map(imageSrc => <img src={imageSrc} alt="Profile" />)}
        </>
    )
}

export default UploadImages