/**
 * Created by duanzheng on 2017/2/13.
 */
const demoOrder = {
    latelyList: [{
        id: 1,
        beginDate: '2017-02-13',
        endDate: '2017-02-15',
        arriveTime: '14:00',
        roomName: '豪华山景家庭套房',
        roomNumber: 1,
        customerName: '张三',
        totalCost: 2440
    }]
}

function order(state = demoOrder, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default order