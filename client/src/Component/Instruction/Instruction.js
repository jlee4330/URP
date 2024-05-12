import React, {useState,useEffect} from 'react';

export const Instruction = ({prevInstruction, updateInstruction }) => {
    const [instruction,setInstruction] = useState(prevInstruction)

    const handleTextChange = (event) => {
        setInstruction(event.target.value);
        updateInstruction(event.target.value)
    }

    useEffect(()=> {
        setInstruction(prevInstruction)
    }, [prevInstruction]);


    return(
    <textarea className='instructionInput' value={instruction} onChange={handleTextChange} placeholder={'Design your digital clone. How does it behave? What should it avoid?'}></textarea>
    );
};