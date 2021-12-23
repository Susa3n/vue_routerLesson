import History from './history'
function getHashPath() {
  console.log(window.location.hash);
  return window.location.hash.slice(1)
}
export default class Hash extends History {
  constructor (router) {
    super(router)
  }

  getCurrentLocation() {
    return getHashPath()
  }
}