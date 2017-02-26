/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';
import NoticeItem from './noticeItem';
import OrderList from './orderList';
import Calendar from './calendar/calendar';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

@CSSModules(styles, { allowMultiple: true })
class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <section styleName="list-item">
                    <Panel header={'1张未处理订单'}>
                        <OrderList></OrderList>
                    </Panel>
                </section>
                <section styleName="list-item">
                    <Panel header="房态日历">
                        <Calendar></Calendar>
                    </Panel>
                </section>
                <section styleName="list-item">
                    <Panel header="系统通知">
                        {this.props.noticeList.map((item) =>
                            <NoticeItem key={item.id} msg={item}/>
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