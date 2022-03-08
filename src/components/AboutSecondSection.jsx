import React from 'react'
import { useRef, useEffect} from 'react'
import './AboutSecondSection.css'
//gsap
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const AboutSecondSection = () => {

//gsap settings
gsap.registerPlugin(ScrollTrigger)
    const slideInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: elem,
                    start: "left center",
                }
            }
        )
    }
    useEffect(() => {
        slideInTop(".skill_inner");
    },[])

    const data = [
        {
            id: 1,
            name: "html",
            icon: "images/About/icons8-html-5-480.png"
        },
        {
            id: 2,
            name: "css",
            icon: "images/About/icons8-css3-480.png"
        },
        {
            id: 3,
            name: "js",
            icon: "images/About/icons8-javascript-480.png"
        },
        {
            id: 4,
            name: "react",
            icon: "images/About/icons8-react-native-480.png"
        },
        {
            id: 5,
            name: "wp",
            icon: "images/About/icons8-wordpress-480.png"
        }
    ]
    return (
        <div className="skill_wrap">
            {data.map((d ,key) =>(
            <div className="skill_inner" key={key}>
                <div className="skill_image">
                    <img src={d.icon} alt={d.name} />
                </div>
                <div className={d.name + " skill_bar"}></div>
            </div>
            ))}
        </div>
    )
}

export default AboutSecondSection
