import React from 'react';
import './css/TextBox.css';

export class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input className={ this.props.classname + " text-box" } placeholder={this.props.placeholder} />
        );
    }
}