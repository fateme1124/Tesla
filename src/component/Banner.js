import React from 'react';
import img from '../Pictures/tesla.png';
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={img} alt='banner'/>
            <div className={styles.containerText}>
                <h4>Tesla Model S</h4>
                <p>Tesla model S is a full-sized electric five/door luxury <br/>
                liftback producted by Tesla Motors . Since its introduction in <br/>
                june 2012 it has achieved rapidly growing sales particularly in <br/>
                norway and california .<br/></p>
                <button>TEST DRIVE</button>
            </div>
        </div>
    );
};

export default Banner;