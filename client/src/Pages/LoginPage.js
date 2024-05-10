import React from 'react'
// import {Link} from 'react-router-dom'
import '../Component/login.css';


export const LoginPage = (props) => {
    return(
        <>
        
        <div className='outside'>   
            <div className='signholder'>
                    <form className='signupbox'>
                        <form className='signinTitle'>
                            Create My Digital Clone
                        </form>
                        <input className='signInput' placeholder={'Username'} ></input>
                        <input className='signInput' placeholder={'Password'} ></input>
                        <div className='buttonContainer'>
                            <button className='loginBtn' type="submit">Login</button>
                            <button className='signBtn' type="submit">Sign In</button>
                        </div>



                    </form>





                </div>

        </div>
        </>
    );
}