/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';
import NoticeItem from './noticeItem';
import OrderList from './orderList';

import './index.scss'

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <section className="mainpage-list-container">
                    <Panel header={'1张未处理订单'}>
                        <OrderList></OrderList>
                    </Panel>
                </section>
                <section className="mainpage-list-container">
                    <Panel header="房态日历">
                        Panel content
                    </Panel>
                </section>
                <section className="mainpage-list-container">
                    <Panel header="系统通知">
                        {this.props.noticeList.map((item) =>
                            <NoticeItem key={item.id} msg={item}></NoticeItem>
                        )}
                    </Panel>
                </section>
            </div>
        )
    }
}

MainPage.propTypes = {
    noticeList: PropTypes.array
}

const mapStateToProps = (state, ownProps) => ({
    noticeList: state.noticeList
})

export default connect(mapStateToProps)(MainPage)