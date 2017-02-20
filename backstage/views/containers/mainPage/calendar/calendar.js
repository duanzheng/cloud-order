/**
 * Created by Tony on 2017/2/20.
 */
import React, {Component, PropTypes} from 'react';
import Explain from './explain';

import './calendar.scss'


class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Explain/>
            </div>
        )
    }
}

export default Calendar;