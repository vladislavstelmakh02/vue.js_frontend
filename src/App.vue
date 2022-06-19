<template>
  <StartPage></StartPage>
  <router-view></router-view>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>
<script>
import StartPage from "@/components/StartPage";
export default {
  name: 'App',
  components: {StartPage}
}
</script>