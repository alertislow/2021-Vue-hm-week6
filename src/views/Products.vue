<template>
    <h1>產品列表</h1>
    <table>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td><router-link :to="`/product/${item.id}`">連結</router-link></td>
        </tr>
      </tbody>
    </table>
</template>
<script>
export default {
  data () {
    return {
      products: [],
      pagination: {},
      isLoading: false
    }
  },
  created () {
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
    this.$http.get(url)
      .then(res => {
        if (res.data.success) {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        }
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
