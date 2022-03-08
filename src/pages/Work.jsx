import React,{ useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import Data from '../data.json'
import './Work.css'
import './locomotivescroll.css'
import LocomotiveScroll from 'locomotive-scroll'

const Work = () => {

    const ref = useRef(null);
    useEffect( () => {
        const scrollElement = new LocomotiveScroll({
            el: ref.current,
            direction: 'horizontal',
            smooth: true,
            multiplier: 0.5,
            tablet: {
                smooth: false,
            },
        })
    })

    const isDesktop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return (
        <div className="work" ref={ref} data-scroll-container>
            <div className="work_inner">
                {Data.map(work => {
                    return(
                    <div className="portfolio">
                        <a href={work.workLink}>
                            <div className="portfolio_image">
                                <img src={work.workImage} alt={work.workTitle} />
                            </div>
                        {isDesktop &&
                            <div className="portfolio_text">
                                <h3>{work.workTitle}</h3>
                                <p>{work.workText}</p>
                            </div>
                        }
                        {isMobile &&
                            <div className="portfolio_mobile_text">
                                <h3>{work.workTitle}</h3>
                                <p>{work.workText}</p>
                            </div>
                        }

                        </a>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Work
