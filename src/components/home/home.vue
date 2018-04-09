<template>
  <div class="container">
    <nav></nav>
    <div class="home-main">
      <div class="background-section">
          <div class="header-section">
            <h1 class="title">旅途</h1>
            <h2>WL Trip</h2>
          </div>
      </div>
      <div class="introduce-section">
        <div class="more-text">More</div>
        <div class="introduce-title-text">WHO ARE WE</div>
        <p class="introduce-text">我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君
          我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君
          我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君
          我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君我们是信息君</p>
        <div class="btn-section">
          <button class="understand-btn">了解更多</button>
          <button class="sign-btn">马上报名</button>
        </div>
      </div>
      <div class="activity-section">
        <button>查看口令</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

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
        height 500px
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
        .btn-section
          position absolute
          display flex
          flex-direction row
          bottom 50px
          right 50px
          .understand-btn
            background-color #52a9fc
            color white
            border 1px solid white
            border-radius 30px
            padding 12px 24px
            font-size 20px
            margin-right 20px
            outline none
          .sign-btn
            background-color #ffb34d
            color white
            border 1px solid white
            border-radius 30px
            padding 12px 24px
            font-size 20px
            outline none
      .activity-section
        width 100%
        height 500px

</style>
