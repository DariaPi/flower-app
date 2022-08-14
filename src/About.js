import { useState } from 'react';
import aboutData from './aboutData';

function About () {
    const [showMore, setShowMore] = useState (false);
    const [about, setAbout] = useState (0);
    const {id, image, text} = aboutData[about];

    const previousTxt = () => {
        setAbout (about => {
            about --;
            if (about < 0) {about = aboutData.length - 1};
            return (about);
        },
        setShowMore (false))
    }

    const nextTxt = () => {
        setAbout (about => {
            about ++;
            if (about > aboutData.length - 1) {about = 0};
            return (about);
        },
        setShowMore (false))
    }

	return (
		<div className="container">
            <h1 className="heading">About us</h1>
            <div className="txt">
                <div className='aboutBox'>
                    <img src={image} alt={id} height="400px" width="600px" className='aboutPic'/>
                    <div className='aboutBtns'>
                        <button onClick={ previousTxt } className='aboutBtn'>previous</button>
                        <button onClick={ nextTxt } className='aboutBtn'>next</button>
                    </div>
                </div>
                <div className='txtAbout'>
                    <p>{ showMore ? text : text.substring (0, 170) + "..." }</p>
                    <button className="showBtn" onClick={() => setShowMore (!showMore)}>{ "show " + (showMore ? "less" : "more") }</button> 
                </div>
            </div>
		</div>
    )
}

export default About;
