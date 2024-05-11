import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../Component/main.css';
import profilePic from '../이수연.jpeg';
import { Goal } from '../Component/Goal/Goal';
import { SecretInfo } from '../Component/secretInfo/SecretInfo';
import { Name } from '../Component/Name/Name';


export const MainPage = () => {
    
    //탭
    const [activeLeftTab, setActiveLeftTab] = useState('Tab1');
    const [activeRightTab, setActiveRightTab] = useState('Tab4');

    const openLeftTab = (tabName) => {
        setActiveLeftTab(tabName);
        };
    
    const openRightTab = (tabName) => {
        setActiveRightTab(tabName);
        };


    //초기
    const [names,setNames] = useState([""]);
    const [goals,setGoals] = useState(["","","","","","","","","",""]);
    const [secrets,setSecrets] = useState([""]);
    


    //업데이트
    const updateName = (i,newname) => {
        setNames(names => {
                const updateNames = [...names];
                updateNames[i] = newname;
                return updateNames;
        })
    };


    const updateGoal = (i,newgoal) => {
        setGoals(goals => { 
            const updateGoals = [...goals];
            updateGoals[i] = newgoal;
            return updateGoals;
        })
    };


    const updateSecret = (i,newsecret) => {
        setSecrets(secrets => {
                const updateSecrets = [...secrets];
                updateSecrets[i] = newsecret;
                return updateSecrets;
        })
    };



    //클라 서버 코드
    function getNames() {
        axios({
            method: "GET",
            url: "http://127.0.0.1:5000/getNames"
        })
        .then((response) => {
            const res = response.data
            setNames(
                res.names
            )
        } )
        .catch((error) => {
        if (error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
        })
    }

    function getGoals() {
        axios({
            method: "GET",
            url: "http://127.0.0.1:5000/getGoals"
        })
        .then((response) => {
            const res = response.data
            setGoals(
                res.goals
            )
        } )
        .catch((error) => {
        if (error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
        })
    }
    
    function getSecrets() {
        axios({
            method: "GET",
            url: "http://127.0.0.1:5000/getSecrets"
            // getSecrets 함수를 main.py에서 만들어야돼 
        })
        .then((response) => {
            const res = response.data
            setSecrets(
                res.secrets
            )
        } )
        .catch((error) => {
        if (error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
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
        console.log("click1!")
    };

    function saveSecrets(){
        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/saveSecret", 
            // main.py에 saveSecret 함수를 만들어야함
            data: {secrets:secrets},
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
        console.log("click2!")
    };

    function saveName(){
        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/saveName", 
            // main.py에 saveName 함수를 만들어야함
            data: {names:names},
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
        console.log("click3!")
    };



    //새로고침 후 db 저장된거 뜨게하는 부분
    useEffect(()=> { 
        getGoals();
    }, []);

    useEffect(()=> { 
        getSecrets();
    }, []);

    useEffect(()=> { 
        getNames();
    }, []);



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
                                <Name prevName={names[0]} updateName = {(newname) => updateName(0,newname)} />
                                {names[0]}
                        </div>

                        
                        <div className='bottom'> 
                            <button className='saveBtn' onClick={saveName} type="submit">Save</button>
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
                            <Goal num={6} prevGoal = {goals[5]} updateGoal = {(newgoal) => updateGoal(5,newgoal)} /> 
                            <Goal num={7} prevGoal = {goals[6]} updateGoal = {(newgoal) => updateGoal(6,newgoal)} /> 
                            <Goal num={8} prevGoal = {goals[7]} updateGoal = {(newgoal) => updateGoal(7,newgoal)} /> 
                            <Goal num={9} prevGoal = {goals[8]} updateGoal = {(newgoal) => updateGoal(8,newgoal)} /> 
                            <Goal num={10} prevGoal = {goals[9]} updateGoal = {(newgoal) => updateGoal(9,newgoal)} /> 

                        
                            {goals[0]}
                            {goals[1]}
                            {goals[2]}
                            {goals[3]}
                            {goals[4]}
                            {goals[5]}
                            {goals[6]}
                            {goals[7]}
                            {goals[8]}
                            {goals[9]}
                           

                    </div>

                    <div className='bottom'> 
                        <button className='saveBtn' onClick={saveGoals}  type="submit">Save</button></div>




                </div>


                <div id="Tab3" className={`tabcontent ${activeLeftTab === 'Tab3' ? 'active' : ''}`}>
                    <div className='secretName'>
                                <h4> Secret Information </h4>
                            <SecretInfo prevSecret = {secrets[0]} updateSecret = {(newsecret) => updateSecret(0,newsecret)}  />  
                            {secrets[0]}                
                            </div>

                            
                        <div className='bottom'> 
                            <button className='saveBtn' onClick={saveSecrets} type="submit">Save</button>
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