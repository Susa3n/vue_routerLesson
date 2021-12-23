export default class History {
  constructor(router) {
    this.router = router
  }
  transitionTo(location) {
    console.log(location);
  }
}