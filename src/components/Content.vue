<template>
  <div class="content">
    <div>use map state</div>
    <div class="item" v-for="item in sitems">
      content:{{ item.content }}
    </div>
    <div>use get </div>
    <div v-for="item in getItems">
      content:{{ item.content }}
    </div>
  </div>
</template>

<<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      sitems: state => state.demo.items
    }),
    ...mapGetters([
      'getItems'
    ])
  }

}
</script>
