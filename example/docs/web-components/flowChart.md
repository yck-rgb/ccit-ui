---
title: alert
---

<cc-flow-chart :list="list"></cc-flow-chart>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "数据来源",
          tasks: [
            {
              id: 1,
              title: "填写",
            },
          ],
        },
        {
          id: 2,
          title: "审核人",
          tasks: [],
        },
        {
          id: 3,
          title: "审批人",
          tasks: [],
        },
        {
          id: 4,
          title: "数据输出",
          tasks: [
            {
              id: 1,
              title: "项目看板",
            },
            {
              id: 2,
              title: "现金流量表",
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
  .cc-flow-chart {
      background: radial-gradient(rgba(221, 231, 238, 1) 15%, transparent 16%),
        radial-gradient(transparent 15%, transparent 16%), transparent;
      background-size: 10px 10px;
  }
</style>

``` html copy
<cc-flow-chart :list="list"></cc-flow-chart>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "数据来源",
          tasks: [
            {
              id: 1,
              title: "填写",
            },
          ],
        },
        {
          id: 2,
          title: "审核人",
          tasks: [],
        },
        {
          id: 3,
          title: "审批人",
          tasks: [],
        },
        {
          id: 4,
          title: "数据输出",
          tasks: [
            {
              id: 1,
              title: "项目看板",
            },
            {
              id: 2,
              title: "现金流量表",
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>
```
