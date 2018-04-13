<template>
  <div id="app" class="container">
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import myNav from './components/nav/nav.vue'
  import myFooter from './components/footer/footer.vue'
  export default {
    name: 'App',
    data(){
      return{
        navScrolled:false
      }
    },
    mounted(){

    },
    methods:{

    },
    components:{
      myFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    position relative
    width 100%
    height 100%
    box-sizing border-box
</style>
