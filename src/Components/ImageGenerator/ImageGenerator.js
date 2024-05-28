import React, { useRef, useState } from 'react'
import default_image from "../Assets/AI-Image.jpg"
const ImageGenerator = () => {
    const [image_url, setImage_url] = useState("/")
    let inputRef = useRef(null)

    const imageGenerator = async () => {
        if (inputRef.current.value === "") {
            return 0;
        }
    }
    return (
        <div className='row d-flex justify-content-center align-items-center min-vh-100"'>
            <div className='col-12 col-md-6 '>
                <div>
                    <img src={image_url === "/" ? default_image : image_url} alt="default" className='img-fluid rounded shadow' />
                </div>
                <div className='search-box input-group mt-4'>
                    <input type="text" className='form-control' ref={inputRef} placeholder='Enter type here ' />
                    <button 
                    className='btn btn-outline-secondary'onClick={imageGenerator}>
                        Generate
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ImageGenerator