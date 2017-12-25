<template>
  <div id="demo">
   <Side></Side>
   <Content></content>
  </div>
</template>
<script>
  import Side from './Side.vue'
  import Content from './Content.vue'
  export default {
    name: 'Demo',
    components: {
      Side,
      Content
    }
  }
</script>
