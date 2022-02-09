export default {
  clickOutside: {
    inserted(el,bindings,VNode) {
      document.addEventListener('click',(e) => {
        if(e.target === el || el.contains(e.target)){
          return
        }
        bindings.value()
      })
    }
  }
}