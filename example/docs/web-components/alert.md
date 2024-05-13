---
title: alert
---


<cc-button @click="pointerClick">默认按钮</cc-button>

<script>
export default {
  methods:{
      pointerClick(){
          this.$alert("提示的文案")
      },
  },
};
</script>


