// import React from 'react';

// const Login = (props) => {
//     return (
//         <div style={{textAlign: "Center", marginTop:"10%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "white"}}>
//             <section>
//                 <h2 >Log In</h2>
//                 <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px"}}>Switch to Sign Up</button>
//                 <br></br>
//                 <form onSubmit={ props.logInSubmitted }>
//                     <br></br>
//                     <label  htmlFor="log_in_username">Username</label>
//                     <br></br>
//                     <input onChange={(e) => props.changeUsername(e) } id="log_in_username" 
//                             type="text" 
//                             name="username" />
//                             <br></br>
//                             <br></br>

//                     <label  htmlFor="log_in_password">Password</label>
//                     <br></br>
//                     <input onChange={(e) => props.changePassword(e) } id="log_in_password" 
//                             type="password" 
//                             name="password"/>
//                             <br></br>
//                             <br></br>
//                     <input type="submit" />
//                 </form>
//             </section>
//         </div>
//     );
// }

// export default Login;

import React, { Component } from 'react';
import './style/login.scss'

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    logInSubmitted = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
        .then(response => response.json())
        .then(res_obj => {
          
          if (!res_obj.errors) {
            this.props.setToken(res_obj)
            this.props.history.push('/heros-vs-villains')
          }
          // } else {
          //   // this.props.getUser(res_obj)
          // }
        })
      }
      changeUsername = (e) => {
        this.setState({
          username: e.target.value
        })
      }
      
      changePassword = (e) => {
        this.setState({
          password: e.target.value
        })
      }

    render() {
        return (
            <div style={{textAlign: "Center", marginTop:"10%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "white"}}>
             <section>
                 <h2 >Log In</h2>
                 <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px"}}>Switch to Sign Up</button>
                 <br></br>
                 <form onSubmit={ this.logInSubmitted }>
                     <br></br>
                     <label  htmlFor="log_in_username">Username</label>
                     <br></br>
                     <input onChange={(e) => this.changeUsername(e) } id="log_in_username" 
                            type="text" 
                            name="username" />
                            <br></br>
                            <br></br>

                    <label  htmlFor="log_in_password">Password</label>
                    <br></br>
                    <input onChange={(e) => this.changePassword(e) } id="log_in_password" 
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
}

export default Login;
