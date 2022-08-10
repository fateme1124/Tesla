import React, { Component } from 'react';
import styles from "./Join.module.css";

class Join extends Component {
    render() {
        return (
            <div className={styles.container}>
                <button>JOIN US TO TEST DRIVE</button>
                <p>*All gueste wish to test drive the new Tesla
                    Models S will be subject to a credit check .
                </p>
            </div>
        );
    }
}

export default Join;