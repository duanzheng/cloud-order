/**
 * Created by Tony on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';
import OrderItem from './orderItem';
import { connect } from 'react-redux';
import Loading from './loading';

import CSSModules from 'react-css-modules';
import styles from './orderList.scss';

@CSSModules(styles, { allowMultiple: true })
class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('/hotel/getCurOrders')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

    render() {
        const { latelyOrderList } = this.props;
        return (
            <div>
                {this.state.isLoading ? <Loading /> : ''}
                <ul>
                    {latelyOrderList.map((item, index) =>
                        <OrderItem key={index} msg={item} />
                    )}
                </ul>
            </div>
        )
    }
}

OrderList.propTypes = {
    latelyOrderList: PropTypes.array
};

const mapStateToProps = (state, ownProps) => ({
    latelyOrderList: state.latelyOrderList
});

export default connect(mapStateToProps)(OrderList);