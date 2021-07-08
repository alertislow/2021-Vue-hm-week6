<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Card></Card>
</template>
<script>
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  },
  created () {
    // console.log(this.$http)
    console.log(process.env.VUE_APP_API)
    console.log(process.env.VUE_APP_PATH)
  }
}
</script>
