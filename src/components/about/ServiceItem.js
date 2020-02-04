import React from 'react'
export function ServiceItem(props) {
    return (
        <div className="col-lg-6 col-sm-6">
            <div className="service box-1 mb-40">
                <i className={props.class}></i>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
