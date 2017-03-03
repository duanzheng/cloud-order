/**
 * Created by duanzheng on 2017/2/13.
 */
import {
    REFUSE_ORDER,
    INIT_CUR_ORDER
} from '../actions/order'

const latelyList = [{
    id: 1,
    beginDate: '2017-02-13',
    endDate: '2017-02-15',
    arriveTime: '14:00',
    roomName: '豪华山景家庭套房',
    roomNumber: 1,
    customerName: '张三',
    totalCost: 2440
}, {
    id: 2,
    beginDate: '2017-02-13',
    endDate: '2017-02-15',
    arriveTime: '14:00',
    roomName: '豪华山景大床房',
    roomNumber: 1,
    customerName: '李四',
    totalCost: 2440
}];

export function latelyOrderList(state = [], action) {
    switch (action.type) {
        case REFUSE_ORDER:
            let delIndex = 0;
            for (let i in state) {
                if (state[i].id == action.id) {
                    delIndex = i;
                }
            }
            return [
                ...state.slice(0, delIndex),
                ...state.slice(delIndex + 1)
            ];
        case INIT_CUR_ORDER:
            return action.orderList;
        default:
            return state;
    }
}