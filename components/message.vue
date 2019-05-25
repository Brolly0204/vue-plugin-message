<template>
  <div id="message">
    <transition-group name="message">
      <div class="panel" v-for="m in messages" :key="m._id">
        <h3>提示框</h3>
        <div>
          {{m.message}}
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "message",
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    this.cid = 0
    console.log('message name:', this.$options.name)
    console.log('message parent name:', this.$parent.$options.name)
  },
  methods: {
    add(options) {
      let _id = this.cid++
      let layer = {...options, _id}
      this.messages.push(layer)
      layer.timer = setTimeout(() => {
        this.remove(layer)
      }, options.duration)
    },
    remove(layer) {
      this.messages = this.messages.filter(m => {
        return m._id !== layer._id
      })
      clearTimeout(layer.timer)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .message-enter, .message-leave-to
    opacity 0
  .message-enter-active, .message-leave-active
    transition all .3s ease-in .1s

  .panel
    position fixed
    top 10%
    left 0
    right 0
    margin auto
    width 200px
    height 100px
    text-align center
    box-shadow 0 0 0 2px pink
    z-index: 9999
</style>
