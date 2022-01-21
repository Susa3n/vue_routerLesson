import History from './history'
function getHashPath() { // 截取路径地址
  return window.location.hash.slice(1)
}

function ensureSlash() {
  if(window.location.hash) {
    return
  }
  window.location.hash = '/'
}
export default class Hash extends History {
  constructor (router) {
    super(router)
    ensureSlash()
  }
  getCurrentLocation() {
    return getHashPath()
  }
  setupListener() { // 建立监听hashChange事件，当路径发生改变 获取路径地址 跳转路径
    window.addEventListener('hashchange',() => {
      this.transitionTo(getHashPath())
    })
  }
}