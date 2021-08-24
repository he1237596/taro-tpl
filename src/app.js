/*
 * @Author: Chris
 * @Date: 2021-08-24 13:50:29
 * @LastEditors: Chris
 * @LastEditTime: 2021-08-24 18:13:54
 * @Descripttion: **
 */
import { Component } from 'react'
import { Provider } from 'react-redux'
import dva from './utils/dva'
import models from './models';

import './app.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
