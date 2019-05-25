import Vue from 'vue'
import App from './App.vue'
import Message from './components/Message.js'

Vue.use(Message)

let info = { title: 'info' }

new Vue({
  name: 'root',
  el: '#app',
  info,
  render: h => h(App)
})
