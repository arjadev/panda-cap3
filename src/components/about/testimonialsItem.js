import React from 'react'
export function TestimonialsItem(props) {
    return (
        <div className="testimonial-item">
            <div className="media">
                <img src={props.avatar} alt="" />
                <div className="content">
                    <h4 className="text-white">{props.name}</h4>
                    <p>{props.job} </p>
                </div>
                {/* <ul className="rating">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                </ul> */}
            </div>
            <div className="comment pt-30">
                <p className="text-white">
                    {props.description}
                </p>
            </div>
        </div>
    )
}
