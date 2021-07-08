<template>
  <div id="app" class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="h3 mb-3 font-weight-normal">
          請先登入
        </h1>
        <div class="col-8">
          <form class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input type="email" v-model="user.username" class="form-control" id="username" placeholder="name@example.com" required autofocus>
              <label for="username">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" v-model="user.password" class="form-control" id="password"
                placeholder="Password" required>
              <label for="password">Password</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () { // 資料
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(api, this.user)
        .then(res => {
          if (res.data.success) {
            const { token, expired } = res.data
            // 物件解構賦值
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            // console.log(this.$route, this.$router)
            this.$router.push('/admin/products')
          } else {
            alert(res.data.message)
            this.user.password = ''
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
