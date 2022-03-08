import React from 'react'
import { useRef, useEffect } from 'react'
import Image from '../images/computer_typing.png'
// css
import './AboutFirtstSection.css'
//gsap
import { gsap } from 'gsap'

const AboutFirtstSection = () => {
    
    // gsap setting
    const profile = gsap.timeline();
    const profileImg = useRef(null);
    const profileh2 = useRef(null);

    useEffect(() =>{
        profile.from(profileImg.current,{
            x: -50,
            opacity: 0,
            ease: "power3.inOut",
        })
        .from(profileh2.current,{
            x: -50,
            opacity: 0,
            ease: "power3.inOut",
        })
        .from(["dl dt", "dl dd"],{
            x: -50,
            opacity: 0,
            ease: "power3.inOut",
            stagger: {
                amount: .8
            }
        })
    })

    return (
        <div className="profile_wrap">
            <div className="profile_inner" timeline={profile}>
            <div className="profile_image" ref={profileImg}><img src={ Image } alt="typing"/></div>
            <div className="profile_text">
                <h2 ref={profileh2}>Profile</h2>
                <dl>
                    <dt>山之口 耕平</dt>
                    <dd>現在Web制作会社でコーダーとして活動しております</dd>
                    <dd>こちらのポートフォリオは初めてのReact製サイトになります</dd>
                    <dd>現在フリーのエンジニアを目指し日々勉強中です</dd>
                </dl>
            </div>
            </div>
        </div>
    )
}

export default AboutFirtstSection
