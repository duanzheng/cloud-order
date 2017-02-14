/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import moment from 'moment'

import './orderItem.scss'

class OrderItem extends Component {
    constructor(props) {
        super(props)

        const {beginDate, endDate, arriveTime, roomName, roomNumber, customerName, totalCost} = props.msg

        this.state = {
            beginDate,
            endDate,
            arriveTime,
            roomName,
            roomNumber,
            customerName,
            totalCost
        }
    }

    initDate(beginDate, endDate) {
        moment.locale('zh-cn');
        beginDate = moment(beginDate).format('MM-DD');
        endDate = moment(endDate).format('MM-DD');
        let ret = beginDate + ' 至 ' + endDate + ' ' + moment(beginDate).to(moment(endDate), true);

        return ret
    }

    render() {
        var dateMsg = this.initDate(this.state.beginDate, this.state.endDate);

        return (
            <li>
                <div className="order-item-row-content">
                    <section className="text-left">{dateMsg}</section>
                    <section className="text-right">{this.state.arriveTime}到店</section>
                </div>
                <div className="order-item-row-content">
                    <section className="text-left">{this.state.roomName + this.state.roomNumber}间</section>
                    <section className="text-right">{this.state.customerName}</section>
                </div>
                <div className="order-item-row-content">
                    <section className="text-right">
                        现付 <span className="price">RMB {this.state.totalCost}</span>
                    </section>
                </div>
                <div className="order-item-line"></div>
                <ButtonToolbar className="order-item-btn-con">
                    <Button>拒绝</Button>
                    <Button bsStyle="primary">接受</Button>
                </ButtonToolbar>
            </li>
        )
    }
}

export default OrderItem