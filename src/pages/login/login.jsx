import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button,
} from 'antd-mobile'

import Logo from '../../components/Logo/Logo'

export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar>CHAD&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem>用户名:</InputItem>
            <WhiteSpace />
            <InputItem type="password">密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <Button type="primary">登&nbsp;&nbsp;&nbsp;录</Button>
            <WhiteSpace />
            <Button>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
