import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button,
  Radio,
} from 'antd-mobile'

import Logo from '../../components/Logo/Logo'

export default class Register extends Component {
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
            <InputItem type="password">确认密码:</InputItem>
            <WhiteSpace />
            <List.Item>
              <span>用户类型:</span>&nbsp;&nbsp;&nbsp;
              <Radio>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>老板</Radio>
            </List.Item>
            <WhiteSpace />
            <Button type="primary">注&nbsp;&nbsp;&nbsp;册</Button>
            <WhiteSpace />
            <Button>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
