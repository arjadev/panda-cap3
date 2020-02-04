import React from 'react'
export function ExperienceItem(props) {
    return (
        <div className="item">
            <div className="main">
                <h4>{props.title}</h4>
                <p><i className='far fa-calendar-alt'></i>{props.calendar}</p>
            </div>
            <p>{props.description}</p>
        </div>
    )
}
