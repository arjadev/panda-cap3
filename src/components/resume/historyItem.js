import React from 'react'
export function HistoryItem(props) {
    return (
        <div className="item">
            <div className="main">
                <h4>{props.title}</h4>
                <p><i className='far fa-calendar-alt'></i>{props.calendar}</p>
                <span className='utan'>{props.place}</span>
            </div>
            {props.description.map((item, index) => <span key={index} className='tan'>{item}<br/></span>)}
        </div>
    )
}
