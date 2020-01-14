import React from 'react';
import './CheckBox.css'

const checkBox = (props) => {

    return(
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required/>
                <label class="form-check-label" for="invalidCheck3">
                Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                You must agree before submitting.
                </div>
            </div>
        </div>
    );

}

export default checkBox;