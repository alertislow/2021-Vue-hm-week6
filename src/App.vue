<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">商品列表</router-link> |
    <router-link to="/cart">購物車</router-link> |
    <router-link to="/orders">訂單</router-link> |
    <router-link to="/login">登入</router-link>
  </div>
  <button type="button" class="btn btn-outline-primary">button</button>
  <router-view />
</template>

<style lang="scss">
@import './assets/all';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
