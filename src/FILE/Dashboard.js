import React from 'react';
import Buttons  from '../Components/Button';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component{

    constructor(props){
        super(props)
        const token = localStorage.getItem("login")

        let loggedIn = false;

        if(token === null)
        {
            loggedIn = true
        }

        this.state = {
            loggedIn
        }
    }

    // componentDidMount(){
    //     fetch('http://localhost/User_Login/select_login.php')
    //         .then((result) => {
    //             this.setState({user: result})
        
    //     })
    // }

    logout = () => {
        localStorage.clear();
       return this.props.history.push('/')
      }
  

    render(){
        if(this.state.loggedIn === true){
            return <Redirect to="/"/>
        }
        return(
            <div>
              this is Dashboard<br/><br/>
              <Buttons title="logout" width="120px" onClick={this.logout}/>
            </div>
        )
    }
}

export default Dashboard;