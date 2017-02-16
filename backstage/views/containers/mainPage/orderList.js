/**
 * Created by Tony on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';
import OrderItem from './orderItem';
import { connect } from 'react-redux';

class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { latelyOrderList } = this.props;
        return (
            <ul>
                {latelyOrderList.map((item, index) =>
                    <OrderItem key={index} msg={item} />
                )}
            </ul>
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