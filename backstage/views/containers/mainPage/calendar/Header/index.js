/**
 * Created by Tony on 2017/2/20.
 */
import React, {Component, PropTypes} from 'react';
import styles from './index.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                <header className={styles.today}>01月14日起</header>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div>今天</div>
                        <div>14</div>
                    </li>
                    <li className={styles.item}>
                        <div>日</div>
                        <div>15</div>
                    </li>
                    <li className={styles.item}>
                        <div>一</div>
                        <div>16</div>
                    </li>
                    <li className={styles.item}>
                        <div>二</div>
                        <div>17</div>
                    </li>
                    <li className={styles.item}>
                        <div>三</div>
                        <div>18</div>
                    </li>
                    <li className={styles.item}>
                        <div>四</div>
                        <div>19</div>
                    </li>
                    <li className={styles.item}>
                        <div>五</div>
                        <div>20</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;