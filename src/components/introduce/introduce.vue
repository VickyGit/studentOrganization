<template>
  <div class="container">
    <myNav :scrolled="false" :fixed="false" :btnToIndex="true"></myNav>
    <div class="header-section">
      <h1 class="header-title">信息君</h1>
      <div class="campus-section">
        <span class="text-yellow">仓前</span>
        <span class="text-blue">校区</span>
      </div>
      <h5 class="header-small-text">仅仅只是开始</h5>
      <h5 class="header-small-text">Just Getting Started</h5>
    </div>
    <div class="main-section">
      <div class="title-section">
        <span class="red-title">Meet&nbsp;&nbsp;</span>
        <span class="yellow-title">The&nbsp;&nbsp;</span>
        <span class="blue-title">Team</span>
      </div>
      <div class="introduce-section">

        <p>
          在这里，遇见更优秀的知己<br>
          在这里，遇见更优秀的自己<br>
          为自己关上一扇窗，为自己打开一扇门</p>

      </div>
      <div class="member-section">
        <div class="row-section">
          <div class="member-item-section" @click="centerDialogVisible = true">
            <img class="member-header" src="./member01.jpg"/>
            <div class="member-name">
              部长 某某某
            </div>
            <div class="member-college">
              阿里巴巴商学院
            </div>
            <div class="member-class">
              电商132
            </div>
          </div>
          <div class="member-item-section">
            <img class="member-header" src="./ic_head.jpg"/>
            <div class="member-name">
              部长 某某某
            </div>
            <div class="member-college">
              阿里巴巴商学院
            </div>
            <div class="member-class">
              电商132
            </div>
          </div>
          <div class="member-item-section">
            <img class="member-header" src="./ic_head.jpg"/>
            <div class="member-name">
              部长 某某某
            </div>
            <div class="member-college">
              阿里巴巴商学院
            </div>
            <div class="member-class">
              电商132
            </div>
          </div>
          <div class="member-item-section">
            <img class="member-header" src="./ic_head.jpg"/>
            <div class="member-name">
              部长 某某某
            </div>
            <div class="member-college">
              阿里巴巴商学院
            </div>
            <div class="member-class">
              电商132
            </div>
          </div>
        </div>
      </div>

    </div>
    <el-dialog
      title="组织部"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <div class="dialog-content-section">
        <img class="dialog-member-header" src="./member01.jpg"/>
        <div class="dialog-member-name">某某某</div>
        <span class="dialog-department-content">负责组织内部事务<br>
      （1）负责中心干部、干事绩效考核<br>
      （2）负责中心干事招新、破冰大会等活动<br>
      （3）负责中心内部通知的发送与人力资源调配<br>
      （5）负责安排办公室值班表及值班考勤<br>
      （6）负责中心统一采购及管理中心的物资<br>
      （7）负责中心经费的使用情况记录及报<br></span>
        <el-button type="primary" @click="centerDialogVisible = false" class="dialog-login-button">立即报名</el-button>
      </div>

    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import myNav from '../nav/nav.vue'
  export default {
    data(){
      return{
        centerDialogVisible: false
      }

    },
    created(){

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
      box-sizing border-box
      .header-section
        display flex
        justify-content center
        flex-direction column
        align-items center
        margin 5rem 0rem
        .header-title
          color #f16651
          font-size 6rem
          font-weight bold
          line-height 100px
          margin-top 80px
          margin-bottom 50px
        .campus-section
          font-size 4rem
          font-weight bold
          margin-bottom 30px
          .text-yellow
            color #fab117
          .text-blue
            color #5fc8d7
        .header-small-text
          color #9b9b9b
          font-size 1.5rem
          line-height 3rem
      .main-section
        display flex
        padding 2rem
        flex-direction column
        align-items center
        background #f4f4f4
        .title-section
          display flex
          flex-direction row
          justify-content center
          font-size 1rem
          font-weight 3rem
          margin-top 3rem
          margin-bottom 3rem
          .red-title
            title-font(#f16651)
          .yellow-title
            title-font(#fab117)
          .blue-title
            title-font(#5fc8d7)
        .introduce-section
          display flex
          flex-direction column
          align-items center
          width 70%
          color #9b9b9b
          font-size 1.3rem
          text-align center
          line-height 2rem
        .member-section
          width 80%
          padding 10px
          margin-top 2rem
          .row-section
            display flex
            flex-direction row
            justify-content center
            .member-item-section
              width 20%
              display flex
              flex-direction column
              align-items center
              justify-content center
              .member-header
                width 80%
                height 80%
                border-radius 50%
              .member-name
                margin-top 20px
                color #9b9b9b
                font-size 24px
              .member-college
                margin-top 15px
                color #00546e
              .member-class
                margin-top 10px
                color #5fc8d7
    .dialog-content-section
      display flex
      flex-direction column
      justify-content center
      align-items center
      .dialog-member-header
        width 60%
        height 60%
        border-radius 50%
      .dialog-member-name
        font-size 25px
        margin-top 20px
      .dialog-department-content
        align-self flex-start
      .dialog-login-button
        align-self flex-end

</style>
