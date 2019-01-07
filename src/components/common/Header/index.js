import React, { Component } from 'react';
import { NavBar, Container, Icon, Form, Nav } from './style';

class Header extends Component {
  render() {
    return (
      <NavBar>
        <Container>
          <Icon href='/'>
            <img src='//static2.cnodejs.org/public/images/cnodejs_light.svg' alt='' />
          </Icon>
          <Form action='/search'>
            <input />
          </Form>
          <Nav>
            <li><a href='/'>首页</a></li>
            <li><a href='/'>新手入门</a></li>
            <li><a href='/'>API</a></li>
            <li><a href='/'>关于</a></li>
            <li><a href='/'>注册</a></li>
            <li><a href='/'>登录</a></li>
          </Nav>  
        </Container>
      </NavBar>
    );
  }
}

export default Header;