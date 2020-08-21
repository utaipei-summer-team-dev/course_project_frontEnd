<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> | -->
      <router-link to="/courses">搜尋結果列表</router-link> |
      <router-link to="/evaluationList">課程內頁</router-link> |
      <router-link to="/newCourse">新增課程</router-link> |
      <router-link to="/newEvaluation">新增評價</router-link> |
      <router-link to="/empty">尚無評價課程</router-link>
      <!-- <router-link to="/admin/dashboard_products">後台產品列表</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>

import '@/assets/css/app.scss';

export default {};

</script>

<style lang="scss">
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
