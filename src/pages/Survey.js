import React, { useState, useMemo, useContext } from 'react';
import { PageContext  } from '../Contexts/PageContext';
import Select from 'react-select'
import countryList from 'react-select-country-list'

const Survey = () => {

    const [customer_name, setCustomer_name] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('')
    const [experience_rating, setExperience_rating] = useState(null);
    const [suggested_improvements, setSuggested_improvements] = useState('');
    const {origin_page} = useContext(PageContext);
    
    const options = useMemo(() => countryList().getData(), [])

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { customer_name, email, age, gender, country, experience_rating, suggested_improvements, origin_page };
            await fetch("http://localhost:5000/survey", {
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
        setCountry(country)
      }

    return (
        <div>
            <h1>This is the Survey page</h1>
            <form onSubmit={onSubmitForm}>

                <label>Name</label>
                    <input type='text' value={customer_name} required onChange={e => setCustomer_name(e.target.value)}/>

                <label>Email</label>
                    <input type='email' required value={email} onChange={e => setEmail(e.target.value)}/>

                <label>Age</label>
                    <input type="number" value={age} onChange={e => setAge(e.target.value)}/>

                <label>Gender</label>
                    <select value={gender} onChange={e => setGender(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="pnta">Prefer not to answer</option>
                    </select>

                <label>Country</label>
                    <Select options={options} value={country} onChange={countryHandler} />

                <label>Rating</label>
                    {/* I'll add this later */}
                
                <label>Suggested Improvements</label>
                    <textarea value={suggested_improvements} onChange={e => setSuggested_improvements(e.target.value)} />
            </form>
            <button>Submit</button>
        </div>
    )
};

export default Survey;
