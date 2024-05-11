import React, { useState,useEffect } from 'react';

export const Goal = ({num,prevGoal,updateGoal}) => {
    
    const [goal,setGoal] = useState(prevGoal);

    const handleTextChange = (event) => {
        setGoal(event.target.value);
        updateGoal(event.target.value)
    }

    useEffect(()=> {
        setGoal(prevGoal)
    }, [prevGoal]);

    
    return(
        <input className='goalInput' key = {num}  value={goal} onChange={handleTextChange} placeholder={ "#" + num + ' Set your personalized goals for creating your digital clone'} ></input>
    );
}