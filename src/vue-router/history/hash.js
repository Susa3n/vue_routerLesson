import History from './history'
function getHashPath() { // hash模式下 获取当前路径 然后截取#号
  return window.location.hash.slice(1)
}

function ensureSlash() {
  if(window.location.hash) { //
    return
  }
  window.location.hash = '/'
}
export default class Hash extends History {
  constructor (router) {
    super(router)
    // new Hash时 确保当前是hash模式 调用ensureSlash
    ensureSlash()
  }
  // 获取当前路径
  getCurrentLocation() {
    return getHashPath()
  }
  setupListener() { // 建立监听hashChange事件，当路径发生改变 获取路径地址 跳转路径
    window.addEventListener('hashchange',() => {
      this.transitionTo(getHashPath())
    })
  }
}