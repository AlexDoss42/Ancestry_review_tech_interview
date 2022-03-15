import React, { useEffect, useState} from 'react';

const SurveyData = () => {

    const [surveyData, SetSurveyData] = useState([])

    useEffect(() => {
        getSurveyData();
    }, []);

    const getSurveyData = async() => {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            console.log(111, response);
            const jsonData = await response.json();
            console.log(222, jsonData)
            SetSurveyData(jsonData);

        } catch (err) {
            console.log(err.message);
            console.error(err.message);
        }
    }

    return (
        <div>
            <label>Average Age of Responders</label>
            <label>Average Experience Rating</label>
            <label>Gender Distribution</label>
            <label>Country Distribution</label>
            <label>Total Number of Responses</label>

        </div>
    )
}

export default SurveyData;

