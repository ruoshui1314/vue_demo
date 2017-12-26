<template>
  <div class="hello">
    <h1>Named Routes</h1>
    <p>Current route name: {{ $route.name }}</p>
    <ul>
      <li><router-link :to="{ name: 'home' }">home</router-link></li>
      <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
      <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
      <li><router-link :to="{ name: 'counter'}">counter</router-link></li>
      <li><router-link :to="{ name: 'demo'}">demo</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
