<template>
  <div id="app">
    <button @click="showMessage">弹出层</button>
  </div>
</template>
<script>
// import {
//   Message
// } from './components/Message.js'
// Message.info({ message: 'Only You!', duration: 3000 })

export default {
  name: 'app',
  mounted(){
    console.log('app', this._info)
  },
  methods: {
    showMessage() {
      this.$message.info({
        message: 'I Love You!',
        duration: 2000
      })
      // Message.info({
      //   message: '我爱你',
      //   duration: 1000
      // })
    }
  }
}
</script>

<style>
</style>
