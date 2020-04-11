import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";



function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [dashboard, setDashboard] = useState(false);

  useEffect(() => {
    async function onLoad() {
      try {
        if(props.location.pathname==="/dashboard")
          setDashboard(true);
        //AUTHENTICATION LOGIC GOES HERE
        // await Auth.currentSession();
        userHasAuthenticated(false);
      }
      catch(e) {
        if (e !== 'No current user') {
          alert(e);
        }
      }
      setIsAuthenticating(false);
    }
    onLoad();
  }, [props]);
  
  

  async function handleLogout() {
    //SIGNOUT LOGIC GOES HERE
    //await Auth.signOut();
  
    userHasAuthenticated(false);

    props.history.push("/login");
  }
  return (
    !isAuthenticating &&
    <div className="App">
      {!dashboard &&
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">CloudInGrid</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {
                isAuthenticated
                  ? <NavItem onClick={handleLogout}>Logout</NavItem>
                  : <>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </>
              }

            </Nav>
          </Navbar.Collapse>
        </Navbar>}


      <Routes appProps={{ isAuthenticated, userHasAuthenticated, dashboard, setDashboard }} />
    </div>
  );
}

export default withRouter(App);