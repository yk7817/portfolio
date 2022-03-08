import React from 'react';
import AboutFirtstSection from '../components/AboutFirtstSection';
import AboutSecondSection from '../components/AboutSecondSection';
import HorizontalScroll from 'react-scroll-horizontal';
//css
import './About.css';

const About = () =>{

    const child = { width: `300em`, height: `100%`}

            return (
        <div className="about">
            <HorizontalScroll reverseScroll={ true }>
                <AboutFirtstSection style={child}/>
                <AboutSecondSection style={child}/>
            </HorizontalScroll>
        </div>
        )
}

export default About