import React, { Component } from 'react';
import styles from "./Car.module.css";


class Car extends Component {
    render() {
        const {number , text , unit} = this.props;
        return (
            <div className={styles.container}>               
                <h2>
                    {number}
                    <sup>{unit}</sup>
                </h2>
                <p>{text}</p>
            </div>
        );
    }
}

export default Car;