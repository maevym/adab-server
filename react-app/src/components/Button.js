import React from 'react';
import './css/Button.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button style={{width: 100}} className="btn-primary btn" onClick={this.props.onclick}>{ this.props.label }</button>
    }
}

export default Button;