<template>
  <ul class="side list-unstyled">
    <button @click="addItem({content: Math.random()})"> 增加 </button>
    <button @click="deleteItem()"> 删除 </button>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: mapActions([
    'addItem',
    'deleteItem'
  ])
}
</script>
