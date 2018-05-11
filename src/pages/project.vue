<style lang="scss" scoped>
  .layout{
    width: 1200px;
    margin: 0 auto;
  }
  header {
    width: 100%;
    height: 90px;
    line-height: 100px;
    position: fixed;
    z-index: 1;
    .header-wrap{
      margin: 0 auto;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      .gohome{
        cursor: pointer;
        i{
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url(../../static/images/icon/goback.png) no-repeat center;
          background-size: 100% 100%;
          vertical-align: text-top;
        }
        span{
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }
  .pro-com-title{
    h1{
      font-size: 40px;
      font-weight: 100;
      color: #191919;
    }
    p{
      font-size: 16px;
      margin: 10px auto 15px;
      color: #919191;
      letter-spacing: 1px;
      opacity: 0.7;
    }
    .line{
      width: 40px;
      height: 2px;
      background: #DDAB50;
      margin-bottom: 80px;
    }
  }
  .pro-title{
    width: 100%;
    height: 210px;
    background: #ccc;
    text-align: center;
    padding-top: 90px;
    color:#fff;
    background: url(../../static/images/project-banner.png) no-repeat center;
    background-size: 100% 100%;
    h1{
      font-size:48px;
    }
    h2{
      font-size:16px;
      font-family:FZLTXHK--GBK1-0;
      margin: 10px auto 30px;
    }
    .pro-title-line{
      width: 370px;
      height: 50px;
      line-height: 50px;
      opacity: 0.8;
      margin: 0 auto;
      background: url(../../static/images/line-home.png) no-repeat center;
      background-size: 100% 100%;
      span{
        font-size:24px;
      }
    }
  }
  .pro-service{
    text-align: center;
    margin-top: 60PX;
    @at-root &-list{
      display: flex;
      justify-content: space-between;
      margin-bottom: 80px;
      figcaption{
        p:first-child{
          font-size: 18px;
          color: #191919;
          margin: 50px auto 10px;
        }
        p:last-child{
          font-size: 14px;
          color: #191919;
        }
      }
    }
  }
  .pro-quality{
    height: 430px;
    padding-top: 60px;
    background:rgba(25,25,25,1);
    opacity:0.98;
    text-align: center;
    @at-root &-title{
      h1,p{
        color: #fff;
      }
    }
    @at-root &-list{
      display: flex;
      justify-content: space-between;
      figure{
        position: relative;
        figcaption{
          position: absolute;
          top: 80px;
          right: -50px;
          p:first-child{
            color: #fff;
            font-size: 18px;
          }
        }
      }
    }
  }
  .capital-quality{
    height: 650px;
  }
  .pro-resource{
    padding-top: 60px;
    opacity:0.98;
    clear: both;
    overflow: hidden;
    text-align: center;
    margin-bottom: 80px;
    @at-root &-list{
      ul li{
        float: left;
        width: 400px;
        height: 200px;
        img{
          vertical-align: middle;
        }
        p{
          font-size: 18px;
          color: #191919;
          line-height: 30px;
        }
      }
      .even{
        background:rgba(240,240,240,1);
        line-height: 200px;
        position: relative;
        i{
          position: absolute;
          display: inline-block;
          width: 0;
          height: 0;
          border: 20px solid rgba(240,240,240,1);
        }
        .arrow-qk{
          top: 80px;
          right: 0;
          border-right-color: rgba(249,249,249,1);
        }
        .arrow-wly{
          bottom: 0;
          right: 180px;
          border-bottom-color: rgba(249,249,249,1)
        }
        .arrow-isz{
          top: 80px;
          left: 0;
          border-left-color: rgba(249,249,249,1)
        }
      }
      .odd{
        background:rgba(249,249,249,1);
        padding-top: 55px;
        height: 145px;
      }
      .capital-odd{
        padding-top: 70px;
        height: 130px;
      }
    }
  }
  .pro-project{
    padding-top: 60px;
    opacity:0.98;
    text-align: center;
    clear: both;
    overflow: hidden;
    height: 540px;
    background:rgba(25,25,25,1);
    @at-root &-title{
      h1,p{
        color: #fff;
      }
    }
    .pro-project-info{
      width: 980px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .info-left{
        width: 420px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div{
          width: 100%;
          height: 55px;
          position: relative;
          background: #fff;
          span{
            position: absolute;
            top: 18px;
            left: 18px;
            font-size: 18px;
            color: #191919;
          }
          input{
            width: 340px;
            height: 55px;
            padding-left: 80px;
            font-size: 18px;
          }
        }
        p{
          font-size: 16px;
          color: #fff;
          margin-bottom: 20px;
          text-align: center;
          opacity: 0.8;
        }
      }
      .info-right{
        width: 530px;
        height: 230px;
        background: #fff;
        .brief{
          p{
            width: 100%;
            height: 40px;
            line-height: 45px;
            font-size: 18px;
            color: #191919;
            background: #fff;
            text-align: left; 
            span{
              margin-left: 15px;
            }
          }
          .numLimit{
            text-align: right;
            height: 33px;
            line-height: 30px;
            span{
              margin-right: 20px;
              font-size: 14px;
              color: #191919;
            }
          }
          textarea{
            border: 0;
            font-size: 18px;
            resize:none;
            outline: none;
            text-indent: 2em;
          }
        }
        .apply{
          margin-top: 20px;
          text-align: right;
          button{
            width: 160px;
            height: 50px;
            font-size: 18px;
            line-height: 50px;
            color: #fff;
            opacity: 0.8;
            border: 1px solid #fff;
            background: #191919;
            cursor: pointer;
            outline: none;
          }
        }
      }
    }
  }
  .applyNow{
    position: fixed;
    right: 50px;
    bottom: 0;
    button{
      width:160px;
      height:50px; 
      font-size: 18px;
      color: #191919;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 10px rgba(0,0,0,0.15);
      border: 0; 
      cursor: pointer;
      outline: none;
    }
  }
</style>

<template>
  <div>
    <header v-show = "headerShow">
      <div class="header-wrap">
        <div class="home-logo">
          <img src="../../static/images/logo.png"/>
        </div>
        <div class="gohome">
          <i></i>
          <span>返回首页</span>
        </div>
      </div>
    </header>
    <div class="pro-title">
      <h1>找项目</h1>
      <h2>FOR PROJECT</h2>
      <div class="pro-title-line">
        <span>发掘优质项目 专业严谨更可靠</span>
      </div>
    </div>
    <div class="pro-service">
      <div class="layout">
        <div class="pro-service-title pro-com-title">
          <h1>专业服务</h1>
          <p>PROFESSIONAL SERVICE</p>
          <p class="line"></p>
        </div>
        <div class="pro-service-list">
          <figure>
            <img src="../../static/images/pro-resource.png" alt="">
            <figcaption>
              <p>提供优质项目资源  解决“项目难找”问题</p>
              <p>Provide Fine Project</p>
            </figcaption>
          </figure>
          <figure>
            <img src="../../static/images/pro-value.png" alt="">
            <figcaption>
              <p>全面评估项目价值  解决“项目难断”问题</p>
              <p>Assess Project Value</p>
            </figcaption>
          </figure>
          <figure>
            <img src="../../static/images/pro-progress.png" alt="">
            <figcaption>
              <p>全程跟踪项目进展  解决“项目难落”问题</p>
              <p>Track Project Progress</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <div class="pro-quality">
      <div class="layout">
        <div class="pro-quality-title pro-com-title">
          <h1>卓越品质</h1>
          <p>EXCELLENT QUALITY</p>
          <p class="line"></p>
        </div>
        <div class="pro-quality-list">
          <figure>
            <img src="../../static/images/pro-team.png" alt="">
            <figcaption>
              <p>一流FA团队</p>
            </figcaption>
          </figure>
          <figure>
            <img src="../../static/images/pro-industry.png" alt="">
            <figcaption>
              <p>深耕垂直行业</p>
            </figcaption>
          </figure>
          <figure>
            <img src="../../static/images/pro-assess.png" alt="">
            <figcaption>
              <p>专业项目评估</p>
            </figcaption>
          </figure>
          <figure>
            <img src="../../static/images/pro-rich.png" alt="">
            <figcaption>
              <p>资源丰富稳定</p>
            </figcaption>
          </figure>
          </figure>
        </div>
      </div>
    </div>
    <div class="pro-resource">
      <div class="layout">
        <div class="pro-resource-title pro-com-title">
          <h1>丰富资源</h1>
          <p>RICH RESOURCES</p>
          <p class="line"></p>
        </div>
        <div class="pro-resource-list">
          <div class="layout">
            <ul>
              <li class="even">
                <i class="arrow-qk"></i>
                <img src="../../static/images/pro-qk.png" alt="">
              </li>
              <li class="odd">
                <p>立足于存量物业领域数年，多年数</p>
                <p>据沉淀与资源积累，集合上海为主</p>
                <p>的一二线城市近千家公寓品牌客户</p>
              </li>
              <li class="even">
                <i class="arrow-wly"></i>
                <img src="../../static/images/pro-wly.png" alt="">
              </li>
              <li class="odd">
                <p>包括青客、爱上租、贝客、未来域等</p>
                <p>一线品牌，及众多持有优质公寓项</p>
                <p>目的中小运营商</p>
              </li>
              <li class="even">
                <i class="arrow-isz"></i>
                <img src="../../static/images/pro-isz.png" alt="">
              </li>
              <li class="odd">
                <p>同时可提供商业、办公、酒店等多种</p>
                <p>业态的项目资源</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="pro-project" id="apply">
      <div class="layout">
        <div class="pro-project-title pro-com-title">
          <h1>申请匹配项目</h1>
          <p>APPLY FOR PROJECT</p>
          <p class="line"></p>
        </div>
        <div class="pro-project-info">
          <div class="info-left">
            <div class="name">
              <span>姓名*</span>
              <input type="text" name="name" maxlength="15"/>
            </div>
            <div class="email">
              <span>邮箱*</span>
              <input type="text" name="email" maxlength="32"/>
            </div>
            <div class="mobile">
              <span>电话*</span>
              <input type="text" name="mobile" maxlength="12"/>
            </div>
            <p>注：提交申请后，项目经理将在1~3个工作日内联络您</p>
          </div>
          <div class="info-right">
            <div class="brief">
              <p><span>资源简介:</span></p>
              <textarea cols="54" rows="7" id="brief" name="brief" maxlength="250" v-on:input ="wordCount"></textarea> 
              <p class="numLimit"><span>{{num}}/250</span></p>
            </div>
            <div class="apply">
              <button>申请匹配</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="applyNow">
      <button @click="applyNow()">立即申请</button>
    </div>
    <comFooter />
  </div>
</template>

<script>
  import comFooter from '@/components/footer.vue'

  export default {
    data() {
      return {
        headerShow:true,
        num:0
      }
    },
    components: {
      comFooter
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      // 滚动页面后头部的效果
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 230) {
          this.headerShow = false;
        } else {
          this.headerShow = true;
        }
      },
      // 资源简介字数限制
      wordCount (e){
        var value = e.target.value;  
        var len = parseInt(value.length);   
        this.num = len;
      },
      //点击立即申请页面定位到表单
      applyNow (){
        // document.body.scrollTop = document.getElementById("apply").offsetTop ;
        // window.pageYOffset = document.getElementById("apply").offsetTop ;
        // document.documentElement.scrollTop = document.getElementById("apply").offsetTop ;
        var gotoApply= function(){
          var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
          var a = document.getElementById("apply").offsetTop;
          console.log(a)
          console.log(currentPosition)
          currentPosition += 10;
          if (currentPosition < a) {
            window.scrollTo(0, currentPosition);
          }
          else {
            window.scrollTo(0, a);
            clearInterval(timer);
            timer = null;
          }
        }
        var timer=setInterval(gotoApply,1);
      }  
    }
  }
</script>


