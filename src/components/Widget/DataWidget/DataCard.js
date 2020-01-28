import React from 'react';
import './DataCard.css'

const DataCard = (props) =>(
    <div className="card-data-info col-sm-2 col-xs-3 ">
        <div class="card-data">
            <p className="card-timestamp">Timestamp</p>
            <p className="card-company">{props.Compensation.company}</p>
            <p className="card-compensation">{props.Compensation.total}</p>
            <p className="card-location">{props.Compensation.location}</p>
        </div>
    </div>
);

export default DataCard;