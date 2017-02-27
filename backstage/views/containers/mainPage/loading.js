/**
 * Created by duanzheng on 2017/2/27.
 */
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import CSSModules from 'react-css-modules';
import styles from './loading.scss';

@CSSModules(styles, { allowMultiple: true })
class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="loading">
                <FontAwesome
                    name="spinner"
                    spin={true}
                    size="2x"
                    styleName="icon"
                />
            </div>
        )
    }
}

export default Loading;