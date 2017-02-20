/**
 * Created by Tony on 2017/2/20.
 */
import React, { PropTypes, Component } from 'react';
import styles from './explain.css';

class Explain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>点击日历内方格可快速开关房</p>
                <span className={styles.canSale}/>可售
                <span className={styles.cannotBill}/>不可订
            </div>
        )
    }
}

export default Explain;