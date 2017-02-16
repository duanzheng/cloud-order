/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import moment from 'moment'
import {connect} from 'react-redux'
import {refuseOrder} from '../../actions/order'

import './orderItem.scss'

class OrderItem extends Component {
    constructor(props) {
        super(props)
    }

    initDate(beginDate, endDate) {
        moment.locale('zh-cn');
        beginDate = moment(beginDate).format('MM-DD');
        endDate = moment(endDate).format('MM-DD');
        let ret = beginDate + ' 至 ' + endDate + ' ' + moment(beginDate).to(moment(endDate), true);

        return ret
    }

    refuse() {
        const {dispatch} = this.props;
        const {id} = this.props.msg;
        dispatch(refuseOrder(id));
    }

    render() {
        const {beginDate, endDate, arriveTime, roomName, roomNumber, customerName, totalCost} = this.props.msg;
        var dateMsg = this.initDate(beginDate, endDate);

        return (
            <li>
                <div className="order-item-row-content">
                    <section className="text-left">{dateMsg}</section>
                    <section className="text-right">{arriveTime}到店</section>
                </div>
                <div className="order-item-row-content">
                    <section className="text-left">{roomName + roomNumber}间</section>
                    <section className="text-right">{customerName}</section>
                </div>
                <div className="order-item-row-content">
                    <section className="text-right">
                        现付 <span className="price">RMB {totalCost}</span>
                    </section>
                </div>
                <div className="order-item-line"></div>
                <ButtonToolbar className="order-item-btn-con">
                    <Button onClick={this.refuse}>拒绝</Button>
                    <Button bsStyle="primary">接受</Button>
                </ButtonToolbar>
            </li>
        )
    }
}

export default connect()(OrderItem);