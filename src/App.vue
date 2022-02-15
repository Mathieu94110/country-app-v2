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
*{
  font-family: 'Nunito Sans';
  text-decoration: none;
  list-style-type: none;

}
body{
  margin:0px;
  padding:0px;
  text-align:center;
  background: hsl(0, 0%, 98%);
}
#app {
width:100%;
height:100%;
margin:0px;
padding:0px
}
</style>


