import React, { useState, useContext } from 'react';
import { PageContext } from '../Contexts/PageContext';
import StarRating from '../components/StarRating';
import CountrySelector from '../components/CountrySelector';
import validator from 'validator';


import './Survey.css';

const Survey = () => {
    const { origin_page } = useContext(PageContext);
    const [displayCountry, setDisplayCountry] = useState<displayCountryInterface>({
        value: '',
        label: ''
    });
    const [surveyData, setSurveyData] = useState<surveyDataInterface>({
        customer_name: '',
        email: '',
        age: '',
        gender: '',
        country: '',
        experience_rating: 0,
        suggested_improvements: '',
        origin_page: origin_page
    });
    const [errorMsg, setErrorMsg] = useState<string>("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        if(surveyData.customer_name.length < 3) {
            return setErrorMsg("Name is required.")
          } else if(!validator.isEmail(surveyData.email)) {
            return setErrorMsg("the email you input is invalid.");
          } 

        try {
            const body = surveyData;
            await fetch("http://localhost:5000/api/survey", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location.href = "/thankyou";
        } catch (error) {
            console.error(error.message);
        }
    }

    const countryHandler = country => {
        const { label } = country;
        setDisplayCountry(country);
        setSurveyData({...surveyData, country: label});
      }

    return (
        <div className='survey-container'>
            <h1>Thank you for helping us improve the site for you!</h1>
            
            <form>
                <label htmlFor="name">Name *REQUIRED</label>
                    <input type='text' id="name" value={surveyData.customer_name} onChange={e => setSurveyData({...surveyData, customer_name: e.target.value})}/>

                <label htmlFor="email">Email *REQUIRED</label>
                    <input type='email' id="email" value={surveyData.email} onChange={e => setSurveyData({...surveyData, email: e.target.value})}/>

                <p>Age</p>
                    <input type="number" value={surveyData.age} onChange={e => setSurveyData({...surveyData, age: e.target.value})}/>

                <p>Gender</p>
                    <select value={surveyData.gender} onChange={e => setSurveyData({...surveyData, gender: e.target.value})}>
                        <option value="">--Please choose an option--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="pnta">Prefer not to answer</option>
                    </select>

                <p>Country</p>
                    <CountrySelector countryHandler={countryHandler} displayCountry={displayCountry} />

                <p>Rating</p>
                    <StarRating experience_rating={surveyData.experience_rating} setSurveyData={setSurveyData} surveyData={surveyData} />
                
                <p>Suggested Improvements</p>
                    <textarea value={surveyData.suggested_improvements} onChange={e => setSurveyData({...surveyData, suggested_improvements: e.target.value})} />
                    {errorMsg && <p>{errorMsg}</p>}
                <button onClick={onSubmitForm}>Submit</button>
            </form>
        </div>
    )
};

export default Survey;

interface surveyDataInterface {
    customer_name: string,
    email: string,
    age: string,
    gender: string,
    country: string,
    experience_rating: number,
    suggested_improvements: string,
    origin_page: string
}

interface displayCountryInterface {
    value: string,
    label: string
}