import React from 'react'
import "./ImageGenerator.css"
import defImage from "../../assets/images/f_img.svg"
const ImageGenerator = () => {

    

    const [imageUrl , setImgUrl] = (null)

    let inputRef =  useRef(null)


  return (
    <div className="ai_image_generator">
        <div className="header">
            Ai image <span>generator</span>
        </div>
        <div className="img_loading">
            <div className='image'>
                <img src={imageUrl ? imageUrl : defImage} alt="" />
            </div>
        </div>
        <div className="searchBox">
            <input
            ref = {inputRef}
            className='searchInput' type="text" placeholder='describe what you want to see' />
            <div className="generateBtn">
                <button>Generate</button>
            </div>
        </div>
    </div>
  )
}

export default ImageGenerator