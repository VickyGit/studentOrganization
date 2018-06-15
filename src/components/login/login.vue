<template>
  <div class="login-container">
    <myNav :scrolled="false" :fixed="false" :btnToIndex="true"></myNav>
    <div class="main-section">
      <el-card class="card-section">
        <el-row type="flex" align="middle" class="row-section">
          <el-col :lg="8" :md="2" :sm="2">
            <span>姓名：</span>
          </el-col>
          <el-col :lg="16" :md="16" :sm="20">
            <el-input v-model="name"></el-input>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle" class="row-section">
          <el-col :span="8">
            <span>性别：</span>
          </el-col>
          <el-col :span="16">
            <el-radio v-model="sex" label="1">男神</el-radio>
            <el-radio v-model="sex" label="2">女神</el-radio>
          </el-col>
        </el-row>


        <el-row type="flex" align="middle" class="row-section">
          <el-col :span="8">
            <span>专业：</span>
          </el-col>
          <el-col :span="16">
            <el-select placeholder="请选择" v-model="selectedProfessional">
              <el-option-group v-for="group in college"
                :key="group.label"
                :label="group.label">
                <el-option v-for="item in group.professional"
                :key="item.value"
                :value="item.value"
                :label="item.label">
                </el-option>
              </el-option-group>
            </el-select>
          </el-col>
        </el-row>


        <el-row type="flex" align="middle" class="row-section">
          <el-col :span="8">
            手机号：
          </el-col>
          <el-col :span="16">
            <el-input placeholder="请输入手机号" v-model="phone"></el-input>
            <a class="tip" href="http://www.189.cn/" target="_blank">还没有校园卡？立即领取</a>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle" class="row-section">
          <el-col :span="8">
            QQ号码：
          </el-col>
          <el-col :span="16">
            <el-input placeholder="请输入QQ号码" v-model="qq"></el-input>
          </el-col>
        </el-row>


        <el-row type="flex" align="middle" class="row-section">
          <el-col :span="8">
            意向部门1：
          </el-col>
          <el-col :span="16">
            <el-select v-model="departmentOne" placeholder="请选择意向部门">
              <el-option v-for="item in departments"
              :key="item.value"
              :value="item.value"
              :label="item.label"></el-option>
            </el-select>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle" class="row-section">
          <el-col :span="8">
            意向部门2：
          </el-col>
          <el-col :span="16">
            <el-select v-model="departmentTwo" placeholder="请选择意向部门">
              <el-option v-for="item in departments"
                         :key="item.value"
                         :value="item.value"
                         :label="item.label"></el-option>
            </el-select>
          </el-col>
        </el-row>


        <el-row type="flex" align="middle" class="row-section">
          <el-col :span="8">
            个人经历：
          </el-col>
          <el-col :span="16">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入个人经历"
              v-model="experience">
            </el-input>
          </el-col>
        </el-row>
        <el-button type="primary" round :loading="true">提交</el-button>
      </el-card>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myNav from '../nav/nav.vue'
  export default {
    data(){
      return{
        name:'',
        sex:'1',
        college:[
          {label:'阿里巴巴商学院',professional:[
            {
              value:'电子商务',
              label:'电子商务'
            },
            {
              value:'物流管理',
              label:'物流管理'
            }
          ]},
          {label:'外国语学院',professional:[
            {
              value:'英语专业',
              label:'英语专业'
            },
            {
              value:'韩语专业',
              label:'韩语专业'
            }
          ]

          }
        ],
        selectedProfessional:'',
        phone:'',
        qq:'',
        departments:[
          {
              value:'部门1',
              label:'部门1'
          },
          {
            value:'部门2',
            label:'部门2'
          },
          {
            value:'部门3',
            label:'部门3'
          }
        ],
        departmentOne:'',
        departmentTwo:'',
        experience:''
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
  .login-container
    width 100%
    height 100%
    box-sizing border-box
    .main-section
      display flex
      flex-direction column
      justify-content center
      align-items center
      background-color #e5ecef
      padding 30px 0px
      .card-section
        width 60%
        display flex
        flex-direction column
        justify-content center
        align-items center
        .row-section
          margin-bottom 20px
          .tip
            font-size 15px
            line-height 15px
            margin-top 5px
            color:#666

</style>
