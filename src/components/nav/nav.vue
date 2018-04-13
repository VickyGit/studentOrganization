<template>
  <nav class="nav-section" :class="{scrolledClass: scrolled,fixedClass:fixed}">
    <img src="./Logo.png" class="logo-img"/>
    <el-button type="success" round size="mini" @click="clickNavBtn">{{btnText}}</el-button>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      scrolled:{
        type:Boolean,
        default:false
      },
      fixed:{
        type:Boolean,
        default:false
      },
      btnToIndex:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        btnText:'加入我们'
      }
    },
    created(){

    },
    mounted(){
      if(this.btnToIndex){
        this.btnText='返回主页'
      }else{
        this.btnText='加入我们'
      }
    },
    methods:{
      clickNavBtn(){
        if(this.btnToIndex){
          this.$router.push('/')
        }else{
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .nav-section
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
    &.fixedClass
      position fixed
      left 0px
      top 0px
      right 0px






</style>
