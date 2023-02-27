import React, { useState, useEffect } from 'react';
import { FaRegImage } from 'react-icons/fa';

const UploadImages = ({ onUpload, isDisabled }) => {
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
    }, [imageURLs, onUpload])

    function onImageChange(event) {
        setImages([...event.target.files]);
    }

    return (
        <>
            <label htmlFor="uploadImage" id="upload-label">
                {imageURLs.length === 0 && <FaRegImage className={`upload-logo ${!isDisabled ? "disabled-logo" : ""}`} />}
                {imageURLs.length > 0 && <span className='upload-logo-alternative'>Not a right photo? Upload another..</span>}
                <input className="form__upload" type="file" id='uploadImage' name='uploadImage'
                    accept="image/png, image/jpg, image/gif, image/jpeg" onChange={onImageChange}
                    required
                    disabled={!isDisabled ? true : false} />
            </label>
            {imageURLs.length > 0 && <img src={imageURLs[0]} alt="Profile" />}
        </>
    )
}

export default UploadImages
