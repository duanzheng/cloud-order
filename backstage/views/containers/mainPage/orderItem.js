/**
 * Created by duanzheng on 2017/2/13.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import moment from 'moment';
import { refuseOrder } from '../../actions/order';

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

    render() {
        const { onRefuse } = this.props;
        const { beginDate, endDate, arriveTime, roomName, roomNumber, customerName, totalCost } = this.props.msg;
        const dateMsg = this.initDate(beginDate, endDate);

        return (
            <li className="order-item">
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
                    <Button onClick={e => {
                        e.preventDefault();
                        onRefuse();
                    }}>拒绝</Button>
                    <Button bsStyle="primary">接受</Button>
                </ButtonToolbar>
            </li>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRefuse: () => {
        dispatch(refuseOrder(ownProps.msg.id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);