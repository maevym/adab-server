import React from 'react';
import Button from './Button';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert('Lu te Login');
    }
    render() {
        return (
            <Button label="Login" onclick={this.handleClick}/>
        );
    }
}

export default Login;