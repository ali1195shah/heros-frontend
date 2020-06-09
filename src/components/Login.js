import React, { Component } from 'react';
import '../styles/login.scss'

class Login extends Component {
    
    state = {
        name: '',
        username: '',
        password: '',
        errors: [],
        userid: null
    }

    // ==================functions===================

    enterUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    enterPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    loginSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(res_obj => {
            if(res_obj.errors){

            }
            else{
                this.props.setToken(res_obj)
                this.props.history.push('/supers')
            }
        })
    }


    render() {
        return (
            <div className="container-login">
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="center">
                <h2>Please Sign In</h2>
                <form onSubmit={ this.loginSubmit }>
                    <input onChange={ this.enterUsername } type="username" placeholder="username" name="username"/>
                    <input onChange={ this.enterPassword } type="password" placeholder="password" name="password"/>
                    <h3>&nbsp;</h3>
                    <button>Login</button>
                </form>
            </div>
        </div>
        );
    }
}

export default Login;
