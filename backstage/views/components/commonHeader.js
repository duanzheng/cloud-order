/**
 * Created by duanzheng on 2017/2/13.
 */
import React, {Component, PropTypes} from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class CommonHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navbar>
                <LinkContainer to={{pathname: '/'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                </LinkContainer>
                <Nav>
                    <LinkContainer to={{pathname: '/index'}}>
                        <NavItem eventKey={1} href="#">首页</NavItem>
                    </LinkContainer>
                    <LinkContainer to={{pathname: '/order-main'}}>
                        <NavItem eventKey={2} href="#">订单处理</NavItem>
                    </LinkContainer>
                    <NavItem eventKey={3} href="#">房态维护</NavItem>
                    <NavItem eventKey={4} href="#">房价维护</NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default CommonHeader