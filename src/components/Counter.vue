<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <ul>
      <li>
        <button @click="increment">+</button>
      </li>
      <li>
        <button @click="decrement">-</button>
      </li>
      <li>
        <button @click="incrementIfOdd">Increment if odd</button>
      </li>
      <li>
        <button @click="incrementAsync">Increment async</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters([
      'evenOrOdd'
    ])
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<<style>
li {
  list-style-type: none;
}
</style>

