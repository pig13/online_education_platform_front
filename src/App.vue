<template>
  <div id="app">
    <!-- 导航区域 -->
    <PHeader/>
    <!-- <transition name="fade"> -->
    <router-view/>
    <!-- </transition> -->
    <PFooter/>
  </div>
</template>

<script>
    import PHeader from '@/components/Common/PHeader'
    import PFooter from '@/components/Common/PFooter'

    export default {
        name: 'App',
        data() {
            return {}
        },
        components: {
            PHeader,
            PFooter,
        }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
