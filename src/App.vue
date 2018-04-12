<template>
  <div id="app" class="container">
    <myNav :scrolled="navScrolled"></myNav>
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
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      window.addEventListener('scroll',()=>{
        scrolled = document.documentElement.scrollTop || document.body.scrollTop
        //滑动修改导航栏的样式
        if(scrolled>0){
          this.navScrolled=true
        }else{
          this.navScrolled=false
        }
      })
    },
    methods:{

    },
    components:{
      myNav,
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
