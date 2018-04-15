<template>
  <nav class="nav-section" :class="{scrolledClass: scrolled}">
    <img src="./Logo.png" class="logo-img"/>
    <el-button type="success" round size="mini" @click="clickLogin">加入我们</el-button>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      scrolled:{
        type:Boolean,
        default:false
      }
    },
    created(){

    },
    methods: {
      clickLogin(){
        this.$router.push('/login')
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .nav-section
    position fixed
    left 0px
    top 0px
    right 0px
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    width 100%
    box-sizing border-box
    min-height 50px
    background-color transparent
    z-index 1
    .logo-img
      width 20%
      min-width 150px
   &.scrolledClass
     width 100%
     box-sizing border-box
     background-color rgba(0,0,0,.25)
     transition all .4s ease-in-out;





</style>
