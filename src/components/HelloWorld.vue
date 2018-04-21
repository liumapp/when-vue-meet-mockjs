<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: []
    }
  },
  mounted: function () {
    this.$axios.get('/api/data/string').then(res => {
      this.data = res.data
      console.log(res)
    })
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
