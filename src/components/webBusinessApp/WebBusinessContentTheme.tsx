import React from 'react';
import {Link} from "react-router-dom"

function WebBusinessContentTheme() {
    return (
        <div className="web-content">
            <div className="web-content-theme">
                <div className="web-content-theme-item">
                    <Link className='web-link' to='hubble'>한국거래소</Link>                  
                    <img src="./homepage1.PNG" alt="" />
                </div>
                <div className="web-content-theme-item">
                    <Link className='web-link' to='hubble'>한국은행</Link>
                    <img src="C:\Users\ajcltm\PycharmProjects\ajcltmblog\public\images\homepage2.PNG" alt="" />
                </div>
                <div className="web-content-theme-item">
                    <Link className='web-link' to='hubble'>서울대학교</Link>
                    <img src=".../public/images/homepage3.png" alt="" />
                </div>
                <div className="web-content-theme-item">
                    <Link className='web-link' to='hubble'>UK 정부</Link>
                    <img src=".../public/images/homepage4.png" alt="" />
                </div>
            </div>
        </div>
        )

}

export default WebBusinessContentTheme