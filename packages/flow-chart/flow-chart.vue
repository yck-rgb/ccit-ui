<template>
  <div class="cc-flow-chart">
    <div
      class="cc-flow-chart-column"
      v-for="(item, itemIndex) in list"
      :key="itemIndex"
    >
      <div class="cc-flow-chart-head-title">
        <div
          class="cc-flow-chart-container cc-flow-chart-head-title-container"
        >
          {{ item.title }}
        </div>
      </div>
      <div
        class="cc-flow-chart-column-border"
        :style="computedStyle(itemIndex)"
      ></div>
      <div
        class="cc-flow-chart-row"
        v-for="(el, elIndex) in item.tasks"
        :key="elIndex"
        @click="selectItem(itemIndex, elIndex)"
      >
        <div
          class="cc-flow-chart-border cc-flow-chart-border__left"
          v-if="itemIndex !== 0"
        >
          <div class="cc-flow-chart-border__arrow"></div>
        </div>
        <div
          class="cc-flow-chart-border cc-flow-chart-border__right"
          v-if="itemIndex !== list.length - 1"
        ></div>
        <div class="cc-flow-chart-container cc-flow-chart-row-container">
          {{ el.title }}
        </div>
      </div>
      <div
        class="cc-flow-chart-row"
        v-show="!item.tasks || item.tasks.length < 1"
      >
        <div class="cc-flow-chart-border cc-flow-chart-border__left">
          <div class="cc-flow-chart-border__arrow"></div>
        </div>
        <div class="cc-flow-chart-border cc-flow-chart-border__right"></div>
        <div
          class="
            cc-flow-chart-container
            cc-flow-chart-row-container
            cc-flow-chart-row-container__empty
          "
        >
          暂无数据
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cc-flow-chart",
  data() {
    return {};
  },
  props: {
    list: {
      default: () => [],
      type: Array,
    },
  },
  computed: {
    computedStyle() {
      return (index) => {
        const list = this.list;
        if (index < list.length - 1) {
          let itemLength = 50;
          let num = list[index]?.tasks?.length - 1;
          let num2 = list[index + 1]?.tasks?.length - 1;
          if (!list[index]?.tasks) {
            return {
              height: "0px",
            };
          }
          if (num2 > num) {
            num = num2;
          }
          return {
            height: `${itemLength * num}PX`,
          };
        }
      };
    },
  },
  methods: {
    selectItem(itemIndex, elIndex) {
      this.$emit("selectItem", this.list[itemIndex], elIndex);
    },
  },
};
</script>


 