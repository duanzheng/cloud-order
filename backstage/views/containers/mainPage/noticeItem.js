/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'
import {Button, Modal} from 'react-bootstrap'

import './noticeItem.scss'

class NoticeItem extends Component {
    constructor(props) {
        super(props)

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
                <Button bsStyle="link" className="notice-item-title" onClick={this.open.bind(this)}>{this.state.title}</Button>
                <span className="notice-item-date">{this.state.date}</span>

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