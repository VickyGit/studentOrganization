<template>
  <div class="container">
    <nav></nav>
    <div class="home-main">
      <div class="background-section">
        <div class="header-section">
          <transition  enter-active-class="animated fade fadeInRight">
            <div v-show="headerAnimshow">
              <h1 class="title">旅途</h1>
              <h2>WL Trip</h2>
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
          <el-button type="success" round>马上报名</el-button>
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
        <img src="./dianxin01.jpg" class="dianxin-img"/>
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
        <el-button type="warning" round class="join-btn">加入我们</el-button>
      </div>
      <footer class="footer-section">
        <el-row  :gutter="20">
          <el-col :lg="5" :md="5" :sm="24" :xs="24" push="2">
            <div class="footer-title">杭州师范大学&nbsp&nbsp学生网络信息化服务中</div>
            <div>Copyright © 2018 Welcome New by Internet Service Center</div>
          </el-col>
          <el-col :lg="5" :md="5" :sm="24" :xs="24" push="2">
            <h4 class="footer-title">关于师大</h4>
            <ul>
              <li class="footer-item">杭州师范大学官网</li>
              <li class="footer-item">杭州师范大学学工部</li>
              <li class="footer-item">杭州师范大学教务处</li>
              <li class="footer-item">杭州师范大学团委</li>
            </ul>
          </el-col>
          <el-col :lg="5" :md="5" :sm="24" :xs="24" push="2">
            <h4 class="footer-title">入学宝典</h4>
            <ul>
              <li class="footer-item">迎新服务网</li>
              <li class="footer-item">勤工助学网</li>
            </ul>
          </el-col>
          <el-col :lg="5" :md="5" :sm="24" :xs="24" push="2">
            <h4 class="footer-title">新生解疑</h4>
            <ul>
              <li class="footer-item">QQ仓前：568906263</li>
              <li class="footer-item">QQ下沙：569615332</li>
              <li class="footer-item">学工部公众号：hsdxsgz</li>
            </ul>

          </el-col>
        </el-row>
      </footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        password: '这是测试信息',
        headerAnimshow: false,
        endAnimShow:false
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
      })
//      window.onscroll=()=>{
//        let scrolled = document.documentElement.scrollTop || document.body.scrollTop
//        console.log(scrolled)
//      }


    },
    methods: {

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
        bg-height('background12')
        .header-section
          display flex;
          flex-direction column;
          justify-content center;
          align-items center;
          color white
          .title
            font-size 55px
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
        end-bg-height('background12')
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
      .footer-section
        display flex
        flex-direction column
        justify-content center
        width 100%
        min-height 200px
        .footer-title
          color #8fa4af
          font-size 20px
          font-weight 600
          margin 10px 0px
        .footer-item
          padding 5px 0px
          color #263239
</style>
