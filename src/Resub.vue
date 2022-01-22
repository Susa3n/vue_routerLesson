<template>
    <SubMenu> 
      <template slot="title">{{ data.name }}</template>
      <template v-for="(m,index) in data.children" >
        <Resub v-if="m.children" :data="m"></Resub>
        <MenuItem v-else>
          {{m.name}}
        </MenuItem>
      </template>
    </SubMenu>
</template>
<script>
import MenuItem from './views/components/MenuItem.vue';
export default {
  name: 'Resub',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    console.log(this.data);
  },
  data () {
    return {}
  },
  components: {MenuItem }
}
</script>
<style scoped>
</style>
