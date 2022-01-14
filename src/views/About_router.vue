<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{path: '/about/a'}">aboutA</router-link>
    <hr>
    <router-link :to="{path: '/about/b'}">aboutB</router-link>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name:'about',
  data() {
    return {
      name: 'susa3n',
      age:19,
      sex:'nv',
      likes: ['篮球'],
      job: {
        salary: 9000,
        professional: 'gongren'
      }
    }
  }
}
</script>
