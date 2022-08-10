import React, { Component } from 'react';
import img from "../Pictures/Layer 1.png";
import style from "./Footer.module.css";


class Footer extends Component {
    render() {
        return (
            <div className={style.container}>
                <img src={img} alt="logo"/>
            </div>
        );
    }
}

export default Footer;