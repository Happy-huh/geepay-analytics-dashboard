import React from 'react';
import './platform.css'

function Platform(props) {
    return (
        <div className='platformContainer'>
            {props.name}<br/>
            {props.svg}
            <div>
                <span>{props.price}</span>
                <span>+{props.percentage}%</span>
            </div>
        </div>
    );
}

export default Platform;