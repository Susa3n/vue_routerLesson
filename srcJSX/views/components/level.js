export default {
  props: {
    t: {
      type: Number,
      require: true
    }
  },
  render(h){
    let tag = `h${this.t}`
    return <tag>{this.$slots.default}</tag>
  }
}