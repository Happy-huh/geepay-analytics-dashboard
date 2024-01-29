import React from 'react';
import './analyticsCard.css'

function AnalyticsCard(props) { 
    return (
        <div className='analyticscontainer'>
            <div>
            <img src={`./imgs/${props.iconName}`} alt="" />
            <img src={`./imgs/${props.imageName}`} alt="" />
            </div>
            <p>{props.message}</p>
            <p className='price'>{props.price}</p>
            <div>
                {props.type=='growth'?<span className='percentageGood'>+{props.percentage}</span>:<span className='percentageBad'>+{props.percentage}</span>}
                <span>vs . previous month</span>
            </div>
        </div>
    );
}

export default AnalyticsCard;