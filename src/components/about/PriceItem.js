import React from 'react'
export function PriceItem(props) {
    return (
        <div className="col-lg-4 col-sm-12">
            <div className="price box-1">
                <div className="head-price">
                    <i className="fa fa-user"></i>
                    <h4>{props.title} </h4>
                </div>
                <div className="body-price">
                    <div className="price-plan">
                        <span className="currency">$ </span>
                        <span className="number">{props.price} </span>
                        <span className="period">month </span>
                    </div>
                    <div className="list-price">
                        <ul>
                            {props.skills.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
