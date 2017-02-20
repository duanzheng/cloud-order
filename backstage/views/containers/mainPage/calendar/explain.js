/**
 * Created by Tony on 2017/2/20.
 */
import React, { PropTypes, Component } from 'react';

class Explain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>点击日历内方格可快速开关房</p>
                <span className="can-sale"/>可售
                <span className="cannot-bill"/>不可订
            </div>
        )
    }
}

export default Explain;