import React, { useState } from 'react';

const Shortform = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const submit = (event) => {
        event.preventDefault();


        const data = { firstname, lastname, email };
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" onBlur={(e) => setFirstName(e.target.value)} />
                <input type="text" onBlur={(e) => setLastName(e.target.value)} />
                <input type="text" onBlur={(e) => setEmail(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Shortform;