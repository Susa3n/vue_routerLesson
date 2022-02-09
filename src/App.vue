<template>
  <div class="app"> 
    <Cascader :options="options"></Cascader>
  </div>
</template>
<script>
import Cascader from '@/components/Cascader'
export default {
  name: "App",
  data() {
    return {
      options: [
        {
          label: "肉类",
          children: [
            {
              label: "猪肉",
              children: [
                {
                  label: "五花肉",
                },
                {
                  label: "里脊肉",
                },
              ],
            },
            {
              label: "鸡肉",
              children: [
                {
                  label: "鸡腿",
                },
                {
                  label: "鸡翅",
                },
              ],
            },
          ],
        },
        {
          label: "蔬菜",
          children: [
            {
              label: "叶菜类",
              children: [
                {
                  label: "大白菜",
                },
                {
                  label: "小白菜",
                },
              ],
            },
            {
              label: "根茎类",
              children: [
                {
                  label: "萝卜",
                },
                {
                  label: "土豆",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    Cascader
  },
};
</script>
















