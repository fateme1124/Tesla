import React from 'react';
import styles from "./Cars.module.css";
import Car from './Car';
import img from "../Pictures/hero image.png";


const Cars = () => {
    return (
        <div className={styles.container}> 
            <img src={img} alt="car"/>
            <div className={styles.cont}>              
                <Car number="5+2" unit="sum" text="AVAILABLESEATE"/>
                <Car number="3.2" unit="sec" text="AVAILABLESEATE"/>
                <Car number="275" unit="mi"  text="AVAILABLESEATE"/>
            </div>
        </div>
    );
};

export default Cars;