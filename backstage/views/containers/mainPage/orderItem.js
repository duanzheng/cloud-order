/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'
import {Button, Modal} from 'react-bootstrap'

class OrderItem extends Component {
    constructor(props) {
        super(props)

        const {beginDate, endDate, arriveTime, roomName, roomNumber, customerName, totalCost} = props

        this.state = {
            dateMsg: '',
            arriveTime,
            roomName,
            roomNumber,
            customerName,
            totalCost
        }

        this.initDate(beginDate, endDate)
    }

    initDate(beginDate, endDate) {
        beginDate = new Date(beginDate).getMonth() + 1

        return new Date()
    }

    render() {
        return (
            <li>

            </li>
        )
    }
}

export default OrderItem