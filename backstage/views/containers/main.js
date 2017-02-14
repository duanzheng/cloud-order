/**
 * Created by duanzheng on 2017/2/9.
 */
import React, {Component, PropTypes} from 'react'
import CommonHeader from '../components/commonHeader'

import './common.scss';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <CommonHeader></CommonHeader>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main