import React, { useState, useMemo } from 'react';
import CountrySelector from '../components/CountrySelector';


const Survey = () => {


    return (
        <div>

        <h1>This is the Survey page</h1>
        <form>
            <label>Name</label>
            <input type='text' required />
            <label>Email</label>
            <input type='email' required />
            <label>Age</label>
            <input type='radio' value="u18" name='age' /> &#60;18
            <input type='radio' value="u18" name='age' /> 18-24
            <input type='radio' value="u18" name='age' /> 25-34
            <input type='radio' value="u18" name='age' /> 35-44
            <input type='radio' value="u18" name='age' /> 45-54
            <input type='radio' value="u18" name='age' /> 55-64
            <input type='radio' value="u18" name='age' /> &#8805;64
            <label>Gender</label>
            <select>
                <option value="">--Please choose an option--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="pnta">Prefer not to answer</option>
            </select>

            <label>Country</label>
            <CountrySelector />
            <label>Rating</label>
            {/* I'll add this later */}
            <label>Suggested Improvements</label>
            <textarea />
        </form>
        </div>
    )
};

export default Survey;
