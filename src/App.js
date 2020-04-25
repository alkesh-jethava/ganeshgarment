import React from 'react';
import Login from './Login/Login';
import ForgotPassword from './Login/ForgotPassword';
import Dashboard from './FILE/Dashboard';
import RegisterUser from './Login/RegisterUser';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ResetPassword from './Login/ResetPassword';
import AdminPanel from './Admin/AdminPanel';
import AdminLogin from './Admin/AdminLogin';

export default class App extends React.Component{
  render(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/RegisterUser" component={RegisterUser} />

            <Route path="/forgotpassword" component={ForgotPassword}/>
            <Route path="/ResetPassword" component={ResetPassword}/>

            <Route path="/AdminLogin" component={AdminLogin}/>
            <Route path="/AdminPanel" component={AdminPanel}/>
            
          </Switch>
        </BrowserRouter>
    )
  }
} 