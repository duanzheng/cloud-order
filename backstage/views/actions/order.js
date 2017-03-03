/**
 * Created by duanzheng on 2017/2/16.
 */
export const REFUSE_ORDER = 'refuse_order';
export const INIT_CUR_ORDER = 'init_order';

export function refuseOrder(id) {
    return {
        type: REFUSE_ORDER,
        id
    }
}

export function initCurOrders(orderList) {
    return {
        type: INIT_CUR_ORDER,
        orderList
    }
}