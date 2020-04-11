import React from "react";
import { Route, Switch} from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ResetPassword from "./containers/ResetPassword";
//import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Landing from "./containers/Landing";

export default function Routes({ appProps }) {
    return (
        <Switch>
        <UnauthenticatedRoute path="/dashboard" exact component={Dashboard} appProps={appProps} />
        <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
        <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
        <UnauthenticatedRoute path="/login/reset" exact component={ResetPassword} appProps={appProps} />
        <UnauthenticatedRoute path="/" exact component={Landing} appProps={appProps}/>
        { /* Finally, catch all unmatched UnauthenticatedRoutes */ }
        <Route component={NotFound} />
      </Switch>
      
    );
  }
