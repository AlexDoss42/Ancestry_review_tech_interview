import React, { useState, useMemo, useContext, useEffect } from 'react';
import { PageContext } from '../Contexts/PageContext';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import StarRating from '../components/StarRating';

const Survey = () => {
    const { origin_page, path } = useContext(PageContext);
    const [customer_name, setCustomer_name] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [displayCountry, setDisplayCountry] = useState('');
    const [country, setCountry] = useState('');
    const [experience_rating, setExperience_rating] = useState('');
    const [suggested_improvements, setSuggested_improvements] = useState('');
    
    const options = useMemo(() => countryList().getData(), []);

    useEffect(() => {
        console.log(1234, origin_page, path)
    }, [origin_page])

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { customer_name, email, age, gender, country, experience_rating, suggested_improvements, origin_page };
            await fetch("http://localhost:5000/api/survey", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/thankyou";
        } catch (error) {
            console.error(error.message);
        }
    }

    const countryHandler = country => {
        setDisplayCountry(country);
        setCountry(country.label);
      }

    return (
        <div>
            <h1>This is the Survey page</h1>
            <form onSubmit={onSubmitForm}>

                <p>Name</p>
                    <input type='text' value={customer_name} required onChange={e => setCustomer_name(e.target.value)}/>

                <p>Email</p>
                    <input type='email' required value={email} onChange={e => setEmail(e.target.value)}/>

                <p>Age</p>
                    <input type="number" value={age} onChange={e => setAge(e.target.value)}/>

                <p>Gender</p>
                    <select value={gender} onChange={e => setGender(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="pnta">Prefer not to answer</option>
                    </select>

                <p>Country</p>
                    <Select options={options} value={displayCountry} onChange={countryHandler} />

                <p>Rating</p>
                    <StarRating experience_rating={experience_rating} setExperience_rating={setExperience_rating} />
                
                <p>Suggested Improvements</p>
                    <textarea value={suggested_improvements} onChange={e => setSuggested_improvements(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Survey;
