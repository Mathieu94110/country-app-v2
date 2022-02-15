<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from "./components/header"

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

body{
  margin:0px;
  padding:0px;
  text-align:center;
}
#app {
width:100%;
height:100%;
margin:0px;
padding:0px
}
</style>
