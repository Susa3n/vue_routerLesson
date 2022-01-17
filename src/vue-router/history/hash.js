import History from './history'
function getHashPath() {
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
  setupListener() {
    window.addEventListener('hashchange',() => {
      this.transitionTo(getHashPath())
    })
  }
}