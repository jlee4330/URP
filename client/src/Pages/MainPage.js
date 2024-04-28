import React, { useState } from 'react';
import '/Users/donggunlee/Desktop/CloneBuilder/URP/client/src/Component/main.css';
import profilePic from '/Users/donggunlee/Desktop/CloneBuilder/URP/client/src/이수연.jpeg';

export const MainPage = () => {
    const [activeLeftTab, setActiveLeftTab] = useState('Tab1');
    const [activeRightTab, setActiveRightTab] = useState('Tab4');


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

                            <div className='nameTitle'>
                                <h4>Name</h4>
                                <input className='nameInput' placeholder={'Name your digital clone'} ></input>
                            </div>
                        </div>

                        <div className='"instruction'>
                            <div className='instuctionName'>
                                <h4>Instruction</h4>
                                <input className='instructionInput' placeholder={'Design your digital clone. How does it behave? What should it avoid?'}></input>

                            </div>



                    </div>






                </div>
                <div id="Tab2" className={`tabcontent ${activeLeftTab === 'Tab2' ? 'active' : ''}`}>
                    <h3>Goals</h3>
                    <p>This is the content for Tab 2.</p>
                </div>
                <div id="Tab3" className={`tabcontent ${activeLeftTab === 'Tab3' ? 'active' : ''}`}>
                    <h3>Secret Information</h3>
                    <p>This is the content for Tab 3.</p>
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
                    <h3>Trial</h3>
                    <p>This is the content for Tab 1.</p>
                </div>
                <div id="Tab5" className={`tabcontent ${activeRightTab === 'Tab5' ? 'active' : ''}`}>
                    <h3>Goals</h3>
                    <p>This is the content for Tab 2.</p>
                </div>
                <div id="Tab6" className={`tabcontent ${activeRightTab === 'Tab6' ? 'active' : ''}`}>
                    <h3>Secret Information</h3>
                    <p>This is the content for Tab 3.</p>
                </div>
                <div id="Tab7" className={`tabcontent ${activeRightTab === 'Tab7' ? 'active' : ''}`}>
                    <h3>Trial</h3>
                    <p>This is the content for Tab 1.</p>
                </div>
                <div id="Tab8" className={`tabcontent ${activeRightTab === 'Tab8' ? 'active' : ''}`}>
                    <h3>Goals</h3>
                    <p>This is the content for Tab 2.</p>
                </div>
                <div id="Tab9" className={`tabcontent ${activeRightTab === 'Tab9' ? 'active' : ''}`}>
                    <h3>Secret Information</h3>
                    <p>This is the content for Tab 3.</p>
                </div>
                <div id="Tab10" className={`tabcontent ${activeRightTab === 'Tab10' ? 'active' : ''}`}>
                    <h3>Secret Information</h3>
                    <p>This is the content for Tab 3.</p>
                </div>
                <div id="Tab11" className={`tabcontent ${activeRightTab === 'Tab11' ? 'active' : ''}`}>
                    <h3>Secret Information</h3>
                    <p>This is the content for Tab 3.</p>
                </div>


            </div>
        </div>
    );
};