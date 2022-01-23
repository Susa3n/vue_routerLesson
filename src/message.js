import MessageComponent from '@/views/components/MessageComponent.vue'
import Vue from 'vue'
 let instance
 function getInstance() {
   instance = new Vue({
    render(h) {
      return h(MessageComponent)
    },
  }).$mount()
  document.body.appendChild(instance.$el)
 }
 getInstance()

export const Message  = {

  success(options) {

    !instance && getInstance()
    instance.$children[0].add(options)

  },
  warn() {},
  info() {},
  danger() {}
}

export default {
  install(_vue) {
    let $message = {}
    Object.keys(Message).forEach(key => {
      $message[key] = Message[key]
    })
    console.log('11111111');
    _vue.prototype.$message = $message
  }
}