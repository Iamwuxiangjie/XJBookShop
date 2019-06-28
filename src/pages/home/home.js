import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtInput } from "taro-ui"

import './home.less'

export default class Home extends Component {

  config = {
    navigationBarTitleText: '主页'
  }

  constructor(){
    super()
    this.state={
      keyword:'',
      count:1000,
    }
  }

  search=()=>{
      console.log(this.state.keyword)
  }

  render() {
    const state=this.state;

    return (
      <View>
        <AtInput className='search'
          clear
          type='text'
          placeholder={`搜索商品,共${state.count}好物`}
          value={state.keyword}
          onChange={this.search}
        />
      </View>
    )
  }
}
