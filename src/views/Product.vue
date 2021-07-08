<template>
  <h1>單一產品</h1>
  {{ product }}
</template>
<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  mounted () {
    console.log(this.$route.params.id) // 路由屬性
    // console.log(this.$router) // 路由方法
    const id = this.$route.params.id
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
    this.$http.get(url)
      .then(res => {
        if (res.data.success) {
          this.product = res.data.product
        }
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
