<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <form>
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
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'evenOrOdd'
    ]),
    ...mapState({
      count: state => state.count
    })
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

