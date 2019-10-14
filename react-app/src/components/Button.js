import React from 'react';
import './css/Button.css';
import './css/Util.css';

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button className={this.props.classname + " btn-primary btn-inline btn lg-margin-top"} onClick={this.props.onclick}>{ this.props.label }</button>
    }
}