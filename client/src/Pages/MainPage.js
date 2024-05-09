import React, { useState } from 'react';
import axios from 'axios';
import '../Component/main.css';
import profilePic from '../이수연.jpeg';
import { Goal } from '../Component/Goal/Goal';

export const MainPage = () => {
    const [activeLeftTab, setActiveLeftTab] = useState('Tab1');
    const [activeRightTab, setActiveRightTab] = useState('Tab4');

    const [goals,setGoals] = useState(["연습","q","","","","","","","",""]);

    const updateGoal = (i,newgoal) => {
        setGoals(goals => {
            
            const updateGoals = [...goals];
            updateGoals[i] = newgoal;
            return updateGoals;
        })


    }





//    서버로 보내는 코드 
    function saveGoals(){
        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/saveGoals",
            data: {goals:goals}, 
        })
        .then((response) => {
        } )
        .catch((error) => {
        if (error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
        })
        console.log("click!")
    };

    const openLeftTab = (tabName) => {
        setActiveLeftTab(tabName);
    };
    
    const openRightTab = (tabName) => {
        setActiveRightTab(tabName);
    };

    return (
        <div className='mainPage'>
            <div className='left-side'>
                <div className="leftTopTab">
                    <button className={`tablinks ${activeLeftTab === 'Tab1' ? 'active' : ''}`} onClick={() => openLeftTab('Tab1')}>Personal Information</button>
                    <button className={`tablinks ${activeLeftTab === 'Tab2' ? 'active' : ''}`} onClick={() => openLeftTab('Tab2')}>Goals</button>
                    <button className={`tablinks ${activeLeftTab === 'Tab3' ? 'active' : ''}`} onClick={() => openLeftTab('Tab3')}>Secret Information</button>
                </div>

                <div id="Tab1" className={`tabcontent ${activeLeftTab === 'Tab1' ? 'active' : ''}`}>
                    <div className="fixInput">
                            <div className="profilePic">
                                <img src={profilePic} alt="Profile" />
                            </div>
                    </div>

                        <div className='nameTitle'>
                                <h4>Name</h4>
                                <input className='nameInput' placeholder={'Name your digital clone'} ></input>
                        </div>

                        <div className='bottom'> 
                            <button className='saveBtn' type="submit">Save</button>
                        </div>



                        <div className='"instruction'>
                            <div className='instructionName'>
                                <h4> Instruction </h4>
                                <textarea className='instructionInput' placeholder={'Design your digital clone. How does it behave? What should it avoid?'}></textarea>
                                
                            </div>
                        <div className='bottom'> 
                            <button className='saveBtn' type="submit">Save</button>
                        </div>



                    </div>


                </div>
                <div id="Tab2" className={`tabcontent ${activeLeftTab === 'Tab2' ? 'active' : ''}`}>
                    <div className='goalpage'>
                            <h4> Goals</h4>
                        
                            <Goal num={1} prevGoal = {goals[0]} updateGoal = {(newgoal) => updateGoal(0,newgoal)} />
                            <Goal num={2} prevGoal = {goals[1]} updateGoal = {(newgoal) => updateGoal(1,newgoal)} /> 
                            <Goal num={3} prevGoal = {goals[2]} updateGoal = {(newgoal) => updateGoal(2,newgoal)} />  
                            <Goal num={4} prevGoal = {goals[3]} updateGoal = {(newgoal) => updateGoal(3,newgoal)} /> 
                            <Goal num={5} prevGoal = {goals[4]} updateGoal = {(newgoal) => updateGoal(4,newgoal)} /> 
                        
                            {goals[0]}
                            {goals[1]}
                            {goals[2]}
                            {goals[3]}
                            {goals[4]}
                           

                    </div>

                    <div className='bottom'> 
                            <   button className='saveBtn' onClick={saveGoals}  type="submit">Save</button>
                            </div>




                </div>


                <div id="Tab3" className={`tabcontent ${activeLeftTab === 'Tab3' ? 'active' : ''}`}>
                    <div className='secretName'>
                                <h4> Secret Information </h4>
                                <textarea className='secretInput' placeholder={'The information here will not be shared to the researchers.'}></textarea>
                                
                            </div>
                        <div className='bottom'> 
                            <button className='saveBtn' type="submit">Save</button>
                        </div>



                </div>
            </div>

            <div className='right-side'>
                <div className ='rightTopTab'> 
                    <button className={`tablinks ${activeRightTab === 'Tab4' ? 'active' : ''}`} onClick={() => openRightTab('Tab4')}>Trial</button>
                    <button className={`tablinks ${activeRightTab === 'Tab5' ? 'active' : ''}`} onClick={() => openRightTab('Tab5')}>Day 1</button>
                    <button className={`tablinks ${activeRightTab === 'Tab6' ? 'active' : ''}`} onClick={() => openRightTab('Tab6')}>Day 2</button>
                    <button className={`tablinks ${activeRightTab === 'Tab7' ? 'active' : ''}`} onClick={() => openRightTab('Tab7')}>Day 3</button>
                    <button className={`tablinks ${activeRightTab === 'Tab8' ? 'active' : ''}`} onClick={() => openRightTab('Tab8')}>Day 4</button>
                    <button className={`tablinks ${activeRightTab === 'Tab9' ? 'active' : ''}`} onClick={() => openRightTab('Tab9')}>Day 5</button>
                    <button className={`tablinks ${activeRightTab === 'Tab10' ? 'active' : ''}`} onClick={() => openRightTab('Tab10')}>Day 6</button>
                    <button className={`tablinks ${activeRightTab === 'Tab11' ? 'active' : ''}`} onClick={() => openRightTab('Tab11')}>Day 7</button>
                
                </div>

                <div id="Tab4" className={`tabcontent ${activeRightTab === 'Tab4' ? 'active' : ''}`}>
                    <h4>Trial Chat</h4>
                    <div className='inputAndSend'>
                        <input className='inputContainer' placeholder={'Chat with your clone'} ></input>
                        <button className='send' type="submit">Send</button>
                    </div>
                </div>

                <div id="Tab5" className={`tabcontent ${activeRightTab === 'Tab5' ? 'active' : ''}`}>
                    <h4>Day 1 Chat</h4>
                    <div className='inputAndSend'>
                        <input className='inputContainer' placeholder={'Chat with your clone'} ></input>
                        <button className='send' type="submit">Send</button>
                    </div>
                </div>

                <div id="Tab6" className={`tabcontent ${activeRightTab === 'Tab6' ? 'active' : ''}`}>
                    <h4>Day 2 Chat</h4>
                    <div className='inputAndSend'>
                        <input className='inputContainer' placeholder={'Chat with your clone'} ></input>

                        <button className='send' type="submit">Send</button>
                    </div>
                </div>

                <div id="Tab7" className={`tabcontent ${activeRightTab === 'Tab7' ? 'active' : ''}`}>
                    <h4>Day 3 Chat</h4>
                    <div className='inputAndSend'>

                        <input className='inputContainer' placeholder={'Chat with your clone'} ></input>

                        <button className='send' type="submit">Send</button>
                    </div>
                </div>


                <div id="Tab8" className={`tabcontent ${activeRightTab === 'Tab8' ? 'active' : ''}`}>
                    <h4>Day 4 Chat</h4>
                    <div className='inputAndSend'>
                        <input className='inputContainer' placeholder={'Chat with your clone'} ></input>
                        <button className='send' type="submit">Send</button>
                    </div>
                </div>


                <div id="Tab9" className={`tabcontent ${activeRightTab === 'Tab9' ? 'active' : ''}`}>
                    <h4>Day 5 Chat</h4>
                    <div className='inputAndSend'>

                        <input className='inputContainer' placeholder={'Chat with your clone'} ></input>

                        <button className='send' type="submit">Send</button>
                    </div>
                </div>

                <div id="Tab10" className={`tabcontent ${activeRightTab === 'Tab10' ? 'active' : ''}`}>
                    <h4>Day 6 Chat</h4>
                    <div className='inputAndSend'>

                        <input className='inputContainer' placeholder={'Chat with your clone'} ></input>

                        <button className='send' type="submit">Send</button>
                    </div>
                </div>


                <div id="Tab11" className={`tabcontent ${activeRightTab === 'Tab11' ? 'active' : ''}`}>
                    <h4>Day 7 Chat</h4>
                    <div className='inputAndSend'>

                        <input className='inputContainer' placeholder={'Chat with your clone'} ></input>

                        <button className='send' type="submit">Send</button>
                    </div>
                </div>


            </div>
        </div>
    );
};