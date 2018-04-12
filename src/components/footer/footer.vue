<template>
  <footer class="footer-section">
    <el-row  type="flex" justify="space-around">
      <el-col :lg="5" :md="5" :sm="24" :xs="24" >
        <p class="footer-title">杭州师范大学&nbsp学生网络信息化服务中</p>
        <p class="copyright">Copyright © 2018 Welcome New by Internet Service Center</p>
      </el-col>
      <el-col :lg="5" :md="5" :sm="24" :xs="24" >
        <h4 class="footer-title">关于师大</h4>
        <ul>
          <li class="footer-item">杭州师范大学官网</li>
          <li class="footer-item">杭州师范大学学工部</li>
          <li class="footer-item">杭州师范大学教务处</li>
          <li class="footer-item">杭州师范大学团委</li>
        </ul>
      </el-col>
      <el-col :lg="5" :md="5" :sm="24" :xs="24" >
        <h4 class="footer-title">入学宝典</h4>
        <ul>
          <li class="footer-item">迎新服务网</li>
          <li class="footer-item">勤工助学网</li>
        </ul>
      </el-col>
      <el-col :lg="5" :md="5" :sm="24" :xs="24" >
        <h4 class="footer-title">新生解疑</h4>
        <ul>
          <li class="footer-item">QQ仓前：568906263</li>
          <li class="footer-item">QQ下沙：569615332</li>
          <li class="footer-item">学工部公众号：hsdxsgz</li>
        </ul>

      </el-col>
    </el-row>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-section
    display flex
    flex-direction column
    justify-content center
    width 100%
    margin-right 0px
    box-sizing border-box
    min-height 200px
    padding 5%
    .footer-title
      color #8fa4af
      font-size 20px
      font-weight 600
      margin 10px 0px
      white-space pre-wrap
    .copyright
      white-space pre-wrap
    .footer-item
      padding 5px 0px
      color #263239
</style>
