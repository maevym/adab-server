import React from 'react';
import '../css/TextBox.css';

export class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="text-box-container">
                <img className="text-box-logo" src={this.props.src} alt="icon" />
                <input type="text" className={ this.props.classname + " text-box" } placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export class PasswordTextBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="text-box-container">
                <img className="text-box-logo" src={this.props.src} alt="icon" />
                <input type="password" className={ this.props.classname + " text-box" } placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export class EmailTextBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="text-box-container">
                <img className="text-box-logo" src={this.props.src} alt="icon" />
                <input type="email" className={ this.props.classname + " text-box" } placeholder={this.props.placeholder} />
            </div>
        );
    }
}