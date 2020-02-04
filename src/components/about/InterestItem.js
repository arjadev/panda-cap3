import React from 'react'
export function InterestItem(props) {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="inter-icon">
                <i className={props.class}></i>
                <div className="desc-inter">
                    <h6>{props.title}</h6>
                </div>
            </div>
        </div>
    )
}
