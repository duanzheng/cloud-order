/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'
import {Button, Modal} from 'react-bootstrap'
import CSSModules from 'react-css-modules';
import styles from './noticeItem.scss';

@CSSModules(styles, { allowMultiple: true })
class NoticeItem extends Component {
    constructor(props) {
        super(props);

        const {title, date, content} = this.props.msg;
        this.state = {
            title,
            date,
            content,
            showModal: false
        }
    }

    close() {
        this.setState({
            showModal: false
        })
    }

    open() {
        this.setState({
            showModal: true
        })
    }

    render() {
        return (
            <div>
                <Button bsStyle="link" styleName="title" onClick={this.open.bind(this)}>{this.state.title}</Button>
                <span>{this.state.date}</span>

                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.content}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>知道了</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

NoticeItem.propTypes = {
    msg: PropTypes.object.isRequired,
}

export default NoticeItem