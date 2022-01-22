<template>
  <div id="app">
      <Menu>
        <SubMenu>
          <template slot="title">导航一</template>
          <MenuItem>导航1-1</MenuItem>
          <MenuItem>导航1-2</MenuItem>
        </SubMenu>
        <MenuItem>导航二</MenuItem>
        <MenuItem>导航三</MenuItem>
        <MenuItem>导航四</MenuItem>
      </Menu>
  </div>
</template>
<script>
import Menu from '@/views/components/Menu'
import SubMenu from '@/views/components/SubMenu'
import MenuItem from '@/views/components/MenuItem'
export default {
  name: "App",
  components: {
    MenuItem,SubMenu,Menu
  },
  methods: {
  },
};
</script>
