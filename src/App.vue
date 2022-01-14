<template>
  <Table :columns="columns" :data="data"></Table>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "Name",
          key: "name",
          render: this.render,
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
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
