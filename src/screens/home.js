import React from 'react'
import { DB } from '../utils/db'

export function HomeScreen() {
    return (
        <div className="pt-home background-img" >
            <div className="bg-lines">
                <div className="bg-line"></div>
                <div className="bg-line"></div>
                <div className="bg-line"></div>
                <div className="bg-line"></div>
                <div className="bg-line"></div>
            </div>
            <section>
                <div className="banner">
                    <a href='https://www.freelancer.com/u/simonfsclnd' target="_blank"><h1>{DB.username}</h1></a>
                    <p className="cd-headline rotate-1">
                        <span>I am a </span>
                        <span className="cd-words-wrapper">
                            <b className="is-visible">Senior developer </b>
                            {DB.myskills.map((item, index) => <b key={index}>{item}</b>)}
                        </span>
                    </p>
                </div>
                {/* <div className="social">
                    <ul>
                        <li>
                            <a href={DB.git} alt="{}">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div> */}
            </section>
        </div>
    )
}
