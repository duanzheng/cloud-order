/**
 * Created by duanzheng on 2017/2/9.
 */
import {combineReducers} from 'redux'
import noticeList from './noticeList'
import order from './order'

const reducer = combineReducers({
    noticeList,
    order
})

export default reducer