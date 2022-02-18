<template>
  <div>
    <el-input style="width: 200px" size="mini" v-model="userName"> </el-input> 
    <el-button size="mini" @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      userName:""
    };
  },
  methods: {
    login() {
      const {userName,$store} = this
      $store.dispatch('login',userName).then(result => {
        this.$router.push({
          name: 'profile'
        })
      })
      
    }
  }
};
</script>
<style scoped></style>
