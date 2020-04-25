import React, { Component } from 'react';
import Buttons from '../Components/Button';
import TextInput from '../Components/TextInput'

export default class componentName extends Component {

    constructor(props){
        super(props);
        this.state = {

            username: '',
            email: '',
            mobile: '',
            password: '',
            cpassword: '',

            usernameerror: '',
            emailerror: '',
            mobileerror: '',
            passworderror: '',
            cpassworderror: ''
           
        }
    }

    register = () => {

        if(this.state.username === '' && this.state.email === '' && this.state.mobile === ''  && this.state.password === '' && this.state.cpassword === '')
        {
            this.setState({
                usernameerror: "Please Enter Username",
                emailerror: "Please Enter Email",
                mobileerror: "Please Enter Mobile Number",
                passworderror: "Please Enter Password",
                cpassworderror: "Please Enter Confirm Password"
            })   
        }
        else if(this.state.username === '')
        {
            this.setState({
                usernameerror: "Please Enter Username"
            })
        }
        else if(this.state.email === '')
        {
            this.setState({
                emailerror: "Please Enter Email"
            })
        }
        else if(this.state.mobile === '')
        {
            this.setState({
                mobileerror: "Please Enter Mobile"
            })
        }
        else if(this.state.password === '')
        {
            this.setState({
                passworderror: "Please Enter Password"
            })
        }
        else if(this.state.cpassword === '')
        {
            this.setState({
                cpassworderror: "Please Enter Confirm Password"
            })
        }
        else
        {

            fetch('http://localhost/SignUp/registration.php',
             {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                },

                body: JSON.stringify
                ({
                    username: this.state.username,
                    email: this.state.email,
                    mobile: this.state.mobile,
                    password: this.state.password,
                    cpassword: this.state.cpassword,
                })
            })
            .then((responseJson) => 
            {
                if(responseJson)
                {
                    alert("Check Your Email To Activate Your Account")
                    this.props.history.push('/')
                }
            }).catch((error) => 
            {
                console.error(error);
            });
        }  
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

        if(this.state.username !== '')
        {
            this.setState({
                usernameerror: ""
            })
        }
        if(this.state.email !== '')
        {
            this.setState({
                emailerror: ""
            })
        }
        if(this.state.mobile !== '')
        {
            this.setState({
                mobileerror: ""
            })
        }
        if(this.state.password !== '')
        {
            this.setState({
                passworderror: ""
            })
        }
        if(this.state.cpassword !== '')
        {
            this.setState({
                cpassworderror: ""
            })
        } 
    }

  render() {
    return (
        
        <div className="login_container">
        <div className="login_form">
            <h3 style={{marginTop: '70px'}}>Registration</h3>

             <form style={{marginTop: '50px'}}>  
                 <div  > 

                 <TextInput type="text"
                            value={this.state.username}
                            name="username"
                            onChange={this.change}
                            lbl="Full Name"/>
                            <p className="error">{this.state.usernameerror}</p>

                <TextInput type="text" 
                            value={this.state.email}
                            name="email"
                            onChange={this.change}
                            lbl="Email Address"/>   
                             <p className="error">{this.state.emailerror}</p>

                 <TextInput type="text"
                            value={this.state.mobile}
                            name="mobile"
                            onChange={this.change}
                            lbl="Mobile Number"/>
                             <p className="error">{this.state.mobileerror}</p>

                <TextInput type="text"
                            value={this.state.password}
                            name="password"
                            onChange={this.change}
                            lbl="Password"/>       
                             <p className="error">{this.state.passworderror}</p>

                <TextInput type="text"
                            value={this.state.cpassword}
                            name="cpassword"
                            onChange={this.change}
                            lbl="Confirm Password"/>  
                             <p className="error">{this.state.cpassworderror}</p>
                                        
                    <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>
                        <Buttons title="Create Account" width="350px" onClick={this.register}/>
                    </div>
                </div> 
            </form>
        </div>
    </div>
    )
  }
}
