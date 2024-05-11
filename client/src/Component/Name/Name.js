import React, {useState, useEffect} from 'react';

export const Name = ({prevName,updateName}) => {

    const [name,setName] = useState(prevName);

    const handleTextChange = (event) => {
        setName(event.target.value);
        updateName(event.target.value)
    }

    useEffect(()=> {
        setName(prevName)
    }, [prevName]);


    
    return(
    <input className='nameInput' value={name} onChange={handleTextChange} placeholder={'Name your digital clone'} ></input>
    );

};