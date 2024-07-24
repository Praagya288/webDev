import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can i help you?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Plan a complete India tour for me</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Wish me birthday in programming style</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept : urban planning</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm ways to make a dish more delicious</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                             <img src={assets.send_icon} alt="" />
                        </div>
                    </div>

                <p className='bottom-info' >
                    Gemini may display inaccurate info , including about people ,
                    so double-check its responses. Your privacy and Gemini apps
                </p>

                </div>

        </div>

    </div>
  )
}

export default Main