<template>
  <div class="cc-alert">{{ text }}</div>
</template>

<script>
export default {
  name: "cc-alert",
  mounted() {
    setTimeout(() => {
      document.body.removeChild(this.$el);
    }, 1500);
  },
};
</script>

