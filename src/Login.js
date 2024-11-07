
import React, {useState, useEffect} from "react";
import './css/Login.css';
import Header from './templates/Header';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class LoginButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { isLoading: false};
    }

    handleClick() {
        this.setState({isLoading: true});

        // This probably where you would have an `ajax` call
        setTimeout(() => {
        // Completed of async action, set loading state back
        this.setState({isLoading: false});
        }, 2000);
    }

    render() {
        let isLoading = this.state.isLoading;
        return (
            <Button
                bsStyle="primary"
                disabled={isLoading}
                onClick={!isLoading ? this.handleClick : null}>
                {isLoading ? 'Loging...' : 'Login'}
            </Button>
        );
    }
}

class CurrentTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTime: new Date().toLocaleString};
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({currentTime: new Date().toLocaleString()});
        }, 1000);   
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <span>{this.state.currentTime}</span>
        );
    }
}


const App = () => {
  return (
    <div className="login-app-container">
      <Header />
      <div className="login-content">
        <div><span className="login-font-size4">My React App</span></div>
        <div><span className="login-font-size2">please input your ID and password</span></div>
        <div className="form-group">
            <div className="col-sm-20">
                <label htmlFor="username">id :</label>
                <input type="text" id="username" className="form-control" placeholder="Enter your ID" />
            </div>
            <div className="col-sm-20">
                <label htmlFor="password">password:</label>
                <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                &nbsp;<LoginButton />
            </div>
        </div>
        <div>
            <Link to="/register">Register</Link>
        </div>
        <div>
            <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </div>
      <div className="login-notice-container">
        <Card className='login-notice-card'>
            <Card.Title className='login-notice-title'>Notice</Card.Title>
            <Card.Body>
                have a good day! welcome to my app! the current time is <CurrentTime />.
            </Card.Body>
        </Card>
        </div>
    </div>
  );
};
export default App;