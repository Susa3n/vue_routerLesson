<template>
  <div id="app">
    <!-- <Menu>
        <SubMenu>
          <template slot="title">导航一</template>
          <MenuItem>导航1-1</MenuItem>
          <MenuItem>导航1-2</MenuItem>
        </SubMenu>
        <MenuItem>导航二</MenuItem>
        <MenuItem>导航三</MenuItem>
        <MenuItem>导航四</MenuItem>
      </Menu> -->
    <WMenu :data="menuData"></WMenu>
  </div>
</template>
<script>
// import Menu from "@/views/components/Menu";
// import SubMenu from "@/views/components/SubMenu";
// import MenuItem from "@/views/components/MenuItem";
import WMenu from "./WMenu.vue";
export default {
  name: "App",
  data() {
    return {
      menuData: [
        {
          id: 1,
          name: "导航一",
          children: [
            {
              id: 1.1,
              name: "导航1-1",
            },
            {
              id: 1.2,
              name: "导航1-2",
              children: [
                {
                  id: "1.2.1",
                  name: "导航1-2-1",
                },
                {
                  id: "1.2.2",
                  name: "导航1-2-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "导航二",
        },
        {
          id: 3,
          name: "导航三",
        },
      ],
    };
  },
  components: {
    // MenuItem,
    // SubMenu,
    // Menu,
    WMenu,
  },
  methods: {},
};
</script>
