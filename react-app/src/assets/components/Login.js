import React from 'react';
import { Button } from './Button';
import { TextBox, PasswordTextBox } from './TextBox';
import '../css/Card.css';
import logo from '../img/adab.svg';
import icon1 from '../img/ic-user.svg';
import icon2 from '../img/ic-lock.svg';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert('Lu te Login');
    }
    render() {
        return (
            <div className="card-login">
                <img className="logo sm-margin-bottom sm-margin-top" src={logo} alt="adab logo" />
                <h6>SIGN IN</h6>
                <TextBox src={icon1} placeholder="" />
                <PasswordTextBox src={icon2} placeholder="" />
                <Button classname="match-parent" label="LOG IN" onclick={this.handleClick} />
                <small>Problem with login? <a>Click Here</a></small>
            </div>
        );
    }
}