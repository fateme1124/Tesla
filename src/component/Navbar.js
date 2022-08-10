import React, { Component } from 'react';
import styles from "./Navbar.module.css";
import logo from "../Pictures/header_logo.png";


class Navbar extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div>
                    <img src={logo} alt="logo" className={styles.logo}/>
                </div>
                <div>
                    <ul className={styles.list}>
                        <li>ORDER</li>
                        <li>TEST DRIVE</li>
                        <li>CHARGING</li>
                        <li>GALLERY</li>
                        <li>VIDEOS</li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Navbar;