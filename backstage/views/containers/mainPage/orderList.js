/**
 * Created by Tony on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';
import OrderItem from './orderItem';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
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

    render() {
        const { latelyOrderList } = this.props;
        return (
            <div>
                <div styleName="loading">
                    <FontAwesome
                        name="spinner"
                        spin="true"
                    />
                </div>
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