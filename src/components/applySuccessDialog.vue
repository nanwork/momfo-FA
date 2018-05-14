<style lang="scss" scoped>
  .dialog{
    width: 100%;
    height: auto;
    &-bg{
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.6;
      position: fixed;
      top: 0;
      z-index: 9;
    }
    &-box{
      width: 600px;
      height: 400px;
      text-align: center;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 30px rgba(0,0,0,0.15);
      position: fixed;
      top: 25%;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 99;
      i{
        display: inline-block;
        width: 25px;
        height: 25px;
        position: absolute;
        top: 30px;
        right: 30px;
        background: url(../../static/images/icon/close.png) no-repeat center;
        background-size: 100% 100%;
        cursor: pointer;
      }
      img{
        margin: 115px auto 40px;
      }
      h2{
        font-size:30px;
        color:rgba(25,25,25,1);
        margin-bottom: 20px;
        text-align: center;
      }
      p{
        font-size:18px;
        color:rgba(25,25,25,1);
        text-align: center;
      }
    }
  }
</style>

<template>
  <div class="dialog" v-if="show">
    <div class="dialog-bg"></div>
      <div class="dialog-box">
        <i @click="close()"></i>
        <img src="../../static/images/icon/success.png" alt="" />
        <h2>恭喜您申请成功！</h2>
        <p>项目经理将在1~3个工作日内联络您</p>
      </div>
  </div>
</template>
<script>
export default {
  data (){
    return {
      show : true
    }
  },
  methods :{
    //点击关闭弹框
    close (){
      this.show = false;
    }
  }
}
</script>

