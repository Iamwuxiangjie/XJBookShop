import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/home/home',
      'pages/cate/cate',
      'pages/cart/cart',
      'pages/user/user'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '详解书店',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/home/home",
        iconPath: "./pages/images/index/home.png",
        selectedIconPath: "./pages/images/index/home_active.png",
        text: "首页"
      }, {
        pagePath: "pages/cate/cate",
        iconPath: "./pages/images/index/cate.png",
        selectedIconPath: "./pages/images/index/cate_active.png",
        text: "分类"
      }, {
        pagePath: "pages/cart/cart",
        iconPath: "./pages/images/index/cart.png",
        selectedIconPath: "./pages/images/index/cart_active.png",
        text: "购物车"
      }, {
        pagePath: "pages/user/user",
        iconPath: "./pages/images/index/user.png",
        selectedIconPath: "./pages/images/index/user_active.png",
        text: "个人"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
