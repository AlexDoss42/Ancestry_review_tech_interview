import React, { useEffect, useState} from 'react';

interface numbersDataInterface {
    total_responses: number,
    average_age: number,
    average_rating: number
}

interface surveyDataInterface {
    countryDistributionData: [],
    genderDistrubtionData: [],
    numbersDataInterface
}

const SurveyData = (): JSX.Element => {

    const [surveyData, SetSurveyData] = useState({
        countryDistributionData: [],
        genderDistributionData: [],
        numbersData: {
            total_responses: 0,
            average_age: 0,
            average_rating: 0
        }
    });
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        getSurveyData();
    }, []);

    const getSurveyData = async() => {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            const jsonData = await response.json();
            SetSurveyData(jsonData);
            setLoaded(true);
            console.log(1234, jsonData);
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

