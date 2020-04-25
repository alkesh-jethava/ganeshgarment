import React from 'react';
import LogoName from '../Components/LogoName';
import TextInput from '../Components/TextInput';
import Buttons from '../Components/Button';

class ForgotPassword extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email: '',
            emailerror: ''
        }
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

        if(this.state.email !== '')
        {
            this.setState({
                emailerror: ''
            })
        }
    }

    forgotpassword = () => {

        if(this.state.email === '')
        {
            this.setState({
                emailerror: "Please Enter Email ID"
            })
        }
        else
        {
            fetch('http://localhost/SignUp/verify_email.php', {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json',
            },                                                                      
            body: JSON.stringify({
                email: this.state.email
            })
        })
           .then((responseJson) => {
               if(responseJson)
               {
                   alert("Check Your Email to Reset Your Password");
               }
               else
               {
                   alert("Please Enter Email");
               }
           }).catch((error) => {
            console.error(error);
        });
        }
    }

    render(){
        return(
            <div className="login_container">
            <div className="login_form">
                <div className="login_logo">
                <LogoName/>   
                </div>

                <h3>VERIFY EMAIL</h3>

                 <form>  
                     <div className="txtinput"> 

                        <TextInput type="text"
                                   lbl="Enter Email ID"
                                   value={this.state.email}
                                   name="email"
                                   onChange={this.change}
                                   />
                        <p className="error">{this.state.emailerror}</p>
                       
                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>
                            <Buttons title="verify" width="350px" onClick={this.forgotpassword}/>
                        </div>
                       

                    </div> 
                </form>
            </div>
        </div>
        )
    }
}

export default ForgotPassword;