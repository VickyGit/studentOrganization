<template>
  <div class="container">
    <myNav :scrolled="navScrolled" :fixed="true" :btnToIndex="false"></myNav>
    <div class="home-main">
      <div class="background-section">
        <div class="header-section">
          <transition  enter-active-class="animated fade fadeInRight">
            <div v-show="headerAnimshow">
            <h1 class="title">行远·登高</h1>
            <h2 class="smill-title">青春无问西东，岁月自成芳华</h2>
            </div>
          </transition>
        </div>
      </div>
      <div class="introduce-section">
        <div class="more-text" >More</div>
        <div class="introduce-title-text">WHO ARE WE</div>
        <p class="introduce-text"> 学生网络信息化服务中心是负责“杭师大微学工”微信公众号、新生网、毕业生离校系统等网络平台的运营与管理，为同学提供综合网络服务的学生组织。中心本着贴近生活，服务学生的宗旨，
          以“杭师大微学工”微信公众号为主要平台，发布师大校园学生工作前沿动态，为师大学生在第一时间内提供各种校园信息，并以互联网为抓手定期开展各类线上线下系列特色活动。</p>
        <div class="btn-section">
          <el-button type="primary" round>了解更多</el-button>
          <el-button type="success" round @click="clickLogin">马上报名</el-button>
        </div>
      </div>
      <div class="help-section">
        <el-row :gutter="100">
          <el-col :lg="6" :md="12" :sm="1">
            <el-card :body-style="{ padding: '0px' }" class="card-section" shadow="hover">
              <img src="./card-img.jpg" class="help-img"/>
              <div class="help-title">《入学手册》</div>
            </el-card>
          </el-col>
          <el-col :lg="6" :md="12" :sm="24">
            <el-card :body-style="{ padding: '0px',height:'100%',display:'flex',flexDirection:'column' }"
                     class="card-section" shadow="hover">
              <img src="./card-img.jpg" class="help-img"/>
              <div class="help-title">《入学手册》</div>
            </el-card>
          </el-col>
          <el-col :lg="6" :md="12" :sm="24">
            <el-card :body-style="{ padding: '0px',height:'100%',display:'flex',flexDirection:'column' }"
                     class="card-section" shadow="hover">
              <img src="./card-img.jpg" class="help-img"/>
              <div class="help-title">《入学手册》</div>
            </el-card>
          </el-col>
          <el-col :lg="6" :md="12" :sm="24">
            <el-card :body-style="{ padding: '0px',height:'100%',display:'flex',flexDirection:'column' }"
                     class="card-section" shadow="hover">
              <img src="./card-img.jpg" class="help-img"/>
              <div class="help-title">《入学手册》</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="activity-section">
        <a href="http://www.189.cn/" target="_blank" style="cursor:default;">
          <img src="./dianxin01.jpg" class="dianxin-img"/>
        </a>
        <el-tooltip class="item" effect="dark" :content="password" placement="top">
          <el-button type="warning" round class="password-btn">查看口令</el-button>
        </el-tooltip>
      </div>
      <div class="end-section" ref="endSection">
        <transition enter-active-class="animated fade fadeInRight">
          <div v-show="endAnimShow" class="center-section">
            <h1 class="end-text">你准备好启程了吗?</h1>
            <h2 class="end-sm-text">我们在杭州师范大学等你</h2>
          </div>
        </transition>
        <el-button type="warning" round class="join-btn" @click="clickLogin">加入我们</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myNav from '../nav/nav.vue'
  export default {
    data () {
      return {
        password: '这是测试信息',
        headerAnimshow: false,
        endAnimShow:false,
        navScrolled:false
      }
    },
    created () {

    },
    mounted(){
      this.headerAnimshow=true
      let endSectionDom=this.$refs.endSection
      //获取dom相对于页面的高度
      let endSectionDomTop=endSectionDom.offsetTop


      //可视化窗口高度
      let windowHeight=document.documentElement.clientHeight
        || document.body.clientHeight;
      //      window.onresize=()=>{
//        console.log('aaa')
//      }
      //监听可视化窗口的改变
      window.addEventListener('resize',()=>{
        windowHeight=document.documentElement.clientHeight
          || document.body.clientHeight
      })


      //获取可视窗口相对于页面的高度
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      //监听事件两种写法，一种window .addEventListener('scroll',()=>{})
      //第二种window.onscroll=()=>{}
      window.addEventListener('scroll',()=>{
        //兼容性
        scrolled = document.documentElement.scrollTop || document.body.scrollTop
        if(windowHeight+scrolled>endSectionDomTop){
          this.endAnimShow=true
        }
        //滑动修改导航栏的样式
        if(scrolled>0){
          this.navScrolled=true
        }else{
          this.navScrolled=false
        }

      })
//      window.onscroll=()=>{
//        let scrolled = document.documentElement.scrollTop || document.body.scrollTop
//        console.log(scrolled)
//      }


    },
    methods: {
      clickLogin(){
        this.$router.push('/login')
      }
    },
    components:{
      myNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .container
    width 100%
    height 100%
    .home-main
      width 100%
      .background-section
        display flex
        flex-direction column
        justify-content center
        width 100%
        background-repeat no-repeat
        background-attachment fixed
        background-position center center
        background-image url('./bg_head.jpg')
        min-height 800px
        background-size cover
        .header-section
          display flex;
          flex-direction column;
          justify-content center;
          align-items center;
          color white
          .title
            font-size 100px
            line-height 100px
            margin-bottom 20px
          .smill-title
            font-size 20px
      .introduce-section
        position relative
        display flex
        flex-direction column
        justify-content flex-start
        align-items center
        background-color white
        min-height 500px
        margin-top 50px
        .more-text
          font-size 20px
          color #666
        .introduce-title-text
          color black
          margin-top 20px
          font-weight bold
          font-size 50px
        .introduce-text
          margin-top 20px
          max-width 60%
          font-size 25px
        .btn-section
          display flex
          flex-direction row
          align-self flex-end
          margin-top 100px
          margin-right 10%
          .login
            background #ffb34d
            border 1px solid #ffb34d
      .help-section
        width 100%
        padding 50px 50px
        box-sizing border-box
        flex-wrap wrap
        .card-section
          width 100%
          margin-top 10px
          .help-img
            width 100%
          .help-title
            padding 14px
            font-size 15px
      .activity-section
        position relative
        width 100%
        cursor default
        .dianxin-img
          width 100%
        .password-btn
          position absolute
          bottom 5%
          right 5%
      .end-section
        display flex
        flex-direction column
        justify-content center
        align-items center
        width 100%
        background-repeat no-repeat
        background-attachment fixed
        background-position center center
        min-height 480px
        background-size cover
        background-image url('./bg_end.jpg')
        .center-section
          display flex
          flex-direction column
          justify-content center
          align-items center
          .end-text
            text-align center
            color: white
            font-weight bold
            font-size 50px
          .end-sm-text
            color #999
            margin-top 30px
            font-size 25px
        .join-btn
          margin-top 30px

</style>
