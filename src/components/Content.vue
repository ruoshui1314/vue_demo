<template>
  <div class="content">
    <div class="item" v-for="item in items()">
      content:{{ item.content }}
    </div>
  </div>
</template>

<<script>
import { mapGetters } from 'vuex'
export default {
  methods: mapGetters([
    'items'
  ])
}
</script>
