import React from 'react';
import { Button } from './Button';
import { EmailTextBox, PasswordTextBox } from './TextBox';
import '../css/Card.css';
import {Settings} from 'react-feather';
import logo from '../img/adab.svg';

const mainStyle= {
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%"
};

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={mainStyle}>
                <div style={{
                    background: "#FFFFFF",
                    flex: "1 1 0%"
                }}>
                    <div style={{
                        color: "#000",
                        display: "flex",
                        flexDirection: "column",
                        align: "center",
                        textAlign: "center"
                    }}>
                        <Settings/>
                        <div style={{
                            height: "72px",
                            width: "72px",
                            alignSelf: "center",
                            borderRadius: "50%",
                            background: "#5BC0DE",
                        }}>
                            {/* <img alt src={{}}/> */}
                        </div>
                        <div style={{
                            paddingTop: "10px",
                            fontWeight: "500",
                            fontSize: "14px",
                        }}>
                            Chandra Liauw
                           </div>
                        <div style={{
                            fontSize: "14px",
                            paddingTop: "4px"
                        }}>
                            chandra@binusian.id
                           </div>

                    </div>
                </div>
                <div style={{
                    background: "#F8F9FA",
                    flex: "2 1 0%",
                }}>a</div>
            </div>
        );
    }
}

