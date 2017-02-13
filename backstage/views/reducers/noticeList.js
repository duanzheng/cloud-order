/**
 * Created by duanzheng on 2017/2/13.
 */
let initNoticeList = [{
    id: 1,
    title: '测试通知1',
    date: '17/02/13',
    content: 'www.baidu.com'
}, {
    id: 2,
    title: '测试通知测试通知测试通知测试通知测试通知2',
    date: '17/02/11',
    content: 'www.taobao.com'
}]

function noticeList(state = initNoticeList, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default noticeList