<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  body, html{
    margin: 0;
    padding: 0;
  }
  p{
    margin: 0;
  }
  a{
    text-decoration: none;
  }
</style>
<style lang="less">
  .vux-header{
    background-color: #458cff!important;
    /*.vux-header-left{
      .vux-header-back{
        color: black;
      }
      .left-arrow::before{
        border: 1px solid #000!important;
        border-width: 1px 0 0 1px!important;
      }
    }
    .vux-header-title{}*/
  }

</style>
