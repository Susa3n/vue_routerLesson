<template>
  <Table :columns="columns" :data="data"></Table>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "名称",
          key: "name",
          render: this.render,
        },
        {
          title: "年龄",
          key: "age",
        },
        {
          title: "地址",
          key: "address",
        },
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
      currendIndex: -1,
    };
  },
  methods: {
    render(h, { row, column, index }) {
      // row 当前表格的一行数据
      // column 当前列数据（也就是表格头）
      // handleChangeIndex点击函数进行处理 传入当前event 及 index
      // JSX语法没有v-model指令语法 只能通过原生操作 给i-input标签绑定value  绑定input事件
      // inputChange输入框输入后绑定给当前行数据
      // on-enter绑定enter键触发事件 将当前行置为-1
      return (
        <div on-click={(e) => this.handleChangeIndex(e, index)}> 
          {this.currendIndex == index ? (
            <i-input
              value={row[column.key]} 
              on-input={(value) => this.inputChange(row, column, value)}
              onOn-enter={() => this.enter()}
            ></i-input>
          ) : (
            <span>{row[column.key]}</span>
          )}
        </div>
      );
    },
    handleChangeIndex(e, index) {
      this.currendIndex = index;
      this.$nextTick(() => {
        console.log(e.currentTarget); // 最外层div标签
        e.currentTarget.getElementsByTagName("input")[0].focus();
      });
    },
    inputChange(row, column, value) {
      row[column.key] = value;
    },
    enter() {
      this.currendIndex = -1;
    },
  },
};
</script>
