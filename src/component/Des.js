import React, { Component } from 'react';
import style from "./Des.module.css";



class Des extends Component {
    render() {
        const {title , text } = this.props;
        return (
            <div className={style.container}>
                <h2>{title}</h2>
                <p>{text}</p>               
            </div>
        );
    }
}

export default Des;