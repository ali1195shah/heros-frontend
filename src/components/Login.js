import React from 'react';
import './style/login.scss'

const Login = (props) => {
    console.log(props)
    return (
        <div style={{textAlign: "Center", marginTop:"10%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "white"}}>
            <section>
                <h2 >Log In</h2>
                <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px"}}>Switch to Sign Up</button>
                <br></br>
                <form onSubmit={ props.logInSubmitted }>
                    <br></br>
                    <label  htmlFor="log_in_username">Username</label>
                    <br></br>
                    <input  id="log_in_username" 
                            type="text" 
                            name="username" />
                            <br></br>
                            <br></br>

                    <label  htmlFor="log_in_password">Password</label>
                    <br></br>
                    <input  id="log_in_password" 
                            type="password" 
                            name="password"/>
                            <br></br>
                            <br></br>
                    <input type="submit" />
                </form>
            </section>
        </div>
    );
}

export default Login;
