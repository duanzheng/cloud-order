/**
 * Created by duanzheng on 2017/2/22.
 */
import React, { PropTypes, Component } from 'react';

class Row extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>豪华山景标间</p>
                <p>
                    <ul>
                        <li></li>
                        <li>2</li>
                        <li>4</li>
                        <li>2</li>
                        <li>7</li>
                        <li>2</li>
                        <li>6</li>
                    </ul>
                </p>
            </div>
        )
    }
}

export default Row;