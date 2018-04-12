<template>
  <div class="container">
    <div class="main-section">
      <el-card>
        <el-row>
          <el-col :span="8">
            <span>姓名</span>
          </el-col>
          <el-col :span="16">
            <el-input></el-input>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <span>性别：</span>
          </el-col>
          <el-col :span="16">
            <el-radio v-model="sex" label="1">男神</el-radio>
            <el-radio v-model="sex" label="2">女神</el-radio>
          </el-col>
        </el-row>


        <el-row>
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




      </el-card>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data(){
      return{
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
        selectedProfessional:''
      }

    },
    created(){

    },
    components:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    width 100%
    height 100%
    box-sizing border-box
    .main-section
      background-color #e5ecef
</style>
