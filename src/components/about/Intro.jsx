import React from 'react';
import "./Intro.css"

const Intro = () => {
    return (
        <div className='intro'>
            <div className='intro_div'>
                <h1 className='intro_title'>We are here to make great design accessible and delightfull
                 for everyone</h1>
                <p className='intro_desc'>
                    "It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum.In the first place we have
                    ranted to God, and by this our present charter confirmed
                    for us and our heirs forever that the English Church shall
                    be free,and shall have her rights entire,"
                </p>
            </div>
            <div className='image'>
                <img src="./src/assets/image3.avif" alt="image1" />
            </div>
        </div>
    );
};

export default Intro;