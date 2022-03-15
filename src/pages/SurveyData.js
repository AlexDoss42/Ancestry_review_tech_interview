import React, { useEffect, useState} from 'react';

const SurveyData = () => {

    const [surveyData, SetSurveyData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getSurveyData();
    }, []);

    const getSurveyData = async() => {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            const jsonData = await response.json();
            SetSurveyData(jsonData);
            setLoaded(true);
        } catch (err) {
            console.error(err.message);
        }
    }

    if(loaded === false) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <p>Total Number of Responses: {surveyData.numbersData.total_responses}</p>
                <p>Average Age of Responders: {surveyData.numbersData.average_age}</p>
                <p>Average Experience Rating: {surveyData.numbersData.average_rating}</p>
                <p>Gender Distribution</p>
                <ul>
                    {surveyData.genderDistributionData.map(gender => (
                        <li key={gender.gender}>
                            <p>{gender.gender}: {gender.count}</p>
                        </li>
                    ))}
                </ul>
                <p>Country Distribution</p>
                <ul>
                    {surveyData.countryDistributionData.map(country => (
                        <li key={country.county}>
                            <p>{country.country}: {country.count}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default SurveyData;

