/**
 * Created by duanzheng on 2017/2/9.
 */
import { combineReducers } from 'redux'
import noticeList from './noticeList'
import { latelyOrderList } from './order'

const reducer = combineReducers({
    noticeList,
    latelyOrderList
})

export default reducer