import React, { useState, useEffect } from 'react'

const UploadImages = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)))
        setImageURLs(newImageURLs);
    }, [images])

    function onImageChange(event) {
        setImages([...event.target.files]);
    }


    return (
        <>
            <input className="form__element" type="file" multiple accept="image/*" onChange={onImageChange} />
            {imageURLs.map(imageSrc => <img src={imageSrc} alt="Profile" />)}
        </>
    )
}

export default UploadImages