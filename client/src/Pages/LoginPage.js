import React from 'react'
// import {Link} from 'react-router-dom'
import '/Users/donggunlee/Desktop/CloneBuilder/URP/client/src/Component/Login/login.css';

export const LoginPage = (props) => {
    return(
        <>
    
       <div className='signholder'>
                <form className='signupbox'>
                    <div className='signinTitle'>
                        Create My Digital Clone
                    </div>
                    <input className='signInput' placeholder={'Username'} ></input>
                    <input className='signInput' placeholder={'Password'} ></input>
                    <button className='loginBtn' type="submit">Sign In</button>


                 
                    
                    
                </form>
        




            </div>
        </>
    );
}