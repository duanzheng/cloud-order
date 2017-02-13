/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Panel} from 'react-bootstrap'
import NoticeItem from './noticeItem'
import OrderItem from './orderItem'

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
                        {this.props.latelyOrderList.map((item) =>
                            <OrderItem key={item.id} msg={item}></OrderItem>
                        )}
                        Panel content
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
    noticeList: PropTypes.array,
    latelyOrderList: PropTypes.array
}

function mapStateToProps(state) {
    return {
        noticeList: state.noticeList,
        latelyOrderList: state.order.latelyList
    }
}

export default connect(mapStateToProps)(MainPage)