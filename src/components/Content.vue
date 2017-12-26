<template>
  <div class="content">
    <div class="item" v-for="item in items">
      content:{{ item.content }}
    </div>
  </div>
</template>

<<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    items: state => state.items
  })
}
</script>
