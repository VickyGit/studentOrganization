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
        <span>Meet&nbsp;&nbsp;</span>
        <span>The&nbsp;&nbsp;</span>
        <span>Team</span>
      </div>
      <div class="introduce-section">
        <p>陌生的城市，陌生的校园与期待你到来的我们。</p>
        <p>学生网络信息化服务中心，是由一群无私奉献、乐于助人的小哥哥小姐姐组成的团队，致力于为全校师生提供便利服务。是不是听不懂？那就请往下拉~</p>

      </div>
      <div class="member-section">
        <div class="row-section">
          <div class="member-item-section" @click="centerDialogVisible = true">
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
        <img class="dialog-member-header" src="./ic_head.jpg"/>
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
    .container
      width 100%
      height 100%
      box-sizing border-box
      .header-section
        display flex
        justify-content center
        flex-direction column
        align-items center
        .header-title
          color #f16651
          font-size 96px
          font-weight bold
          line-height 100px
          margin-top 80px
          margin-bottom 50px
        .campus-section
          font-size 96px
          font-weight bold
          margin-bottom 30px
          .text-yellow
            color #fab117
          .text-blue
            color #5fc8d7
        .header-small-text
          color #9b9b9b
          font-size 25px
      .main-section
        display flex
        padding 2rem
        flex-direction column
        align-items center
        .title-section
          display flex
          flex-direction row
          justify-content center
          font-size 3rem
          font-weight 3rem
          margin-top 3rem
          margin-bottom 3rem
        .introduce-section
          display flex
          flex-direction column
          align-items center
          width 60%
          color #9b9b9b
          font-size 1.5rem
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
