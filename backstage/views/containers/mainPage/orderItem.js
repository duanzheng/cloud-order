/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'
import {Button, Modal} from 'react-bootstrap'
import moment from 'moment'

class OrderItem extends Component {
    constructor(props) {
        super(props)

        const {beginDate, endDate, arriveTime, roomName, roomNumber, customerName, totalCost} = props.msg

        this.state = {
            dateMsg: this.initDate(beginDate, endDate),
            arriveTime,
            roomName,
            roomNumber,
            customerName,
            totalCost
        }
    }

    initDate(beginDate, endDate) {
        // beginDate = moment(beginDate, 'MM-DD')
        // endDate = moment(endDate, 'MM-DD')
        let ret = beginDate + '至' + endDate + ' 3晚'

        return ret
    }

    render() {
        return (
            <li>
                {this.state.dateMsg}
            </li>
        )
    }
}

export default OrderItem