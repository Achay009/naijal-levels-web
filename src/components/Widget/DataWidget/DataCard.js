import React from 'react';
import './DataCard.css'

const DataCard = (props) =>(
    <div className="card-data-info col-sm-2">
        <div class="card-data">
            <p className="card-timestamp">Timestamp</p>
            <p className="card-company">Company Name</p>
            <p className="card-compensation">Compensation</p>
            <p className="card-location">Location</p>
        </div>
    </div>
);

export default DataCard;