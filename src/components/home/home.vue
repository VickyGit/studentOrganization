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

          <el-button type="primary" round class="btn">了解更多</el-button>
          <el-button type="success" round @click="clickLogin" class="btn">马上报名</el-button>
        </div>
      </div>
      <div class="help-section">
        <el-row :gutter="100">
          <el-col :lg="6" :md="12" :sm="1">
            <el-card :body-style="{ padding: '0px' }" class="card-section" shadow="hover">
              <img src="./img01.jpg" class="help-img"/>
              <div class="help-title">《杭师大生活宝典》</div>
            </el-card>
          </el-col>
          <el-col :lg="6" :md="12" :sm="24">
            <el-card :body-style="{ padding: '0px',height:'100%',display:'flex',flexDirection:'column' }"
                     class="card-section" shadow="hover">
              <img src="./img02.jpg" class="help-img"/>
              <div class="help-title">《杭师大入学指南》</div>
            </el-card>
          </el-col>
          <el-col :lg="6" :md="12" :sm="24">
            <el-card :body-style="{ padding: '0px',height:'100%',display:'flex',flexDirection:'column' }"
                     class="card-section" shadow="hover">
              <img src="./img03.jpg" class="help-img"/>
              <div class="help-title">《杭师大交通指南》</div>
            </el-card>
          </el-col>
          <el-col :lg="6" :md="12" :sm="24">
            <el-card :body-style="{ padding: '0px',height:'100%',display:'flex',flexDirection:'column' }"
                     class="card-section" shadow="hover">
              <img src="./img04.jpg" class="help-img"/>
              <div class="help-title">《开学物品清单》</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="red-envelope-section">

        <div class="btn-section">
          <el-button type="primary" round @click="openAlert()" class="btn">活动详情</el-button>
          <el-tooltip class="item" effect="dark" :content="password" placement="top">
            <el-button type="success" round class="btn">查看口令</el-button>
          </el-tooltip>
        </div>
      </div>
      <div class="activity-section">
        <a href="http://www.189.cn/" target="_blank" style="cursor:default;">
          <img src="./dianxin01.jpg" class="dianxin-img"/>
        </a>
      </div>
      <div class="end-section" ref="endSection">
        <transition enter-active-class="animated fade fadeInRight">
          <div v-show="endAnimShow" class="center-section">
            <h1 class="end-text">你准备好启程了吗?</h1>
            <h2 class="end-sm-text">我们在杭州师范大学等你</h2>
          </div>
        </transition>
        <el-button type="warning" round class="join-btn btn" @click="clickLogin">加入我们</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myNav from '../nav/nav.vue'
  export default {
    data () {
      return {
        password: '手机套餐我就选电信',
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
    computed:{

    },
    methods: {
      clickLogin(){
        this.$router.push('/login')
      },
      openAlert(){
        this.$alert('信息君将在6月20日、6月21日、6月22日,22:00派发千元现金红包口令，届时请点击查看口令页面，查看支付宝红包口令','活动详情',{
          confirmButtonText: '确定'
        })
      },
      clickKonwUs(){
          this.$router.push("/introduce")

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
    .btn
      font-size 0.8rem
      padding 0.5rem 1rem
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
        background-image url('./bg_head.png')
        min-height 800px
        background-size cover
        .header-section
          display flex;
          flex-direction column;
          justify-content center;
          align-items center;
          color white
          .title
            font-size 4rem
            line-height 100px
            margin-bottom 20px
          .smill-title
            font-size 1rem
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
          font-size 1rem
          color #666
        .introduce-title-text
          color black
          margin-top 20px
          font-weight bold
          font-size 2rem
        .introduce-text
          margin-top 20px
          max-width 60%
          font-size 1.5rem
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
            font-size 1rem
      .red-envelope-section
        position relative
        width 100%
        redbag-bg-height('./hongbao')
        .btn-section
          position absolute
          bottom 5%
          right 5%

      .activity-section
        position relative
        width 100%
        cursor default
        .dianxin-img
          width 100%

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
        background-image url('./bg_end.png')
        .center-section
          display flex
          flex-direction column
          justify-content center
          align-items center
          .end-text
            text-align center
            color: white
            font-weight bold
            font-size 3rem
          .end-sm-text
            color white
            margin-top 30px
            font-size 1rem
        .join-btn
          margin-top 30px

</style>
