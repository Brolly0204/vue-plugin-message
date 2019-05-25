import Vue from 'vue'
import MessageComponent from './message.vue'

let getInstance = () => {
  let _vm = new Vue({
    name: 'vm',
    render: h => h(MessageComponent)
  }).$mount()

  // 将生成元素添加到body中
  document.body.appendChild(_vm.$el)
  // 获取组件实例
  let component = _vm.$children[0]
  return {
    add(options) {
      component.add(options)
    }
  }
}

// 单例模式 (保证只有一个组件实例)
let instance
let getInst = () => {
  instance = instance || getInstance()
  return instance
}

const Message = {
  info(options) {
    getInst().add(options)
  },
  wran() {},
  success() {},
  error() {}
}

export { Message }

export default {
  install(Vue) {
    const $message = {}
    Object.keys(Message).forEach(type => ($message[type] = Message[type]))
    Vue.prototype.$message = $message
    Vue.mixin({
      beforeCreate() {
        //do something before creating vue instance
        if (this.$options && this.$options.info) {
          this._info = this.$options.info
        } else {
          this._info = this.$parent && this.$parent._info
        }
      }
    })
  }
}

// let _Vue
// export default {
//   install(Vue) {
//     if (!_Vue) {
//       // 防止多次重复Vue.use(Message) 其实Vue内部已经做了处理
//       _Vue = Vue
//       const $message = {}
//       Object.keys(Message).forEach(type => ($message[type] = Message[type]))
//       Vue.prototype.$message = $message
//       Vue.mixin({
//         beforeCreate() {
//           //do something before creating vue instance
//           console.log(1)
//         }
//       })
//     }
//   }
// }
