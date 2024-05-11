import React, { useState, useEffect } from 'react';

export const SecretInfo = ({prevSecret,updateSecret}) => {
    
    const [secret,setSecret] = useState(prevSecret);
    
    const handleTextChange = (event) => {
        setSecret(event.target.value);
        updateSecret(event.target.value)
    }

    useEffect(()=> {
        setSecret(prevSecret)
    }, [prevSecret]);


    
    return ( 
    <textarea className='secretInput' value={secret} onChange={handleTextChange} placeholder={'The information here will not be shared to the researchers.'}></textarea>
    );






} 