import React from 'react';
import './CheckBox.css'

const CheckBox = (props) => {

    return(
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="radio" value={`${props.gender}`} id="invalidCheck3" required/>
                <label class="form-check-label" for="invalidCheck3">
                {props.gender}
                </label>

            </div>
        </div>
    );

}

export default CheckBox;