<template>
  <button class="cc-button" :class="['cc-button--' + type]" @click="click">
    <span>
      <slot>按钮</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "cc-button",
  props: {
    type: {
      default: "default",
      type: String,
    },
  },
  methods:{
    click(){
      this.$emit("click")
    },
  },
};
</script>
