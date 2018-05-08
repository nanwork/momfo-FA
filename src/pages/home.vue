<style lang="scss" scoped>
  .swiper-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 0;
  }
  .arrowShow:before {
    content: "";
    width: 28px;
    height: 65px;
    background: url("../../static/images/swiper-slide.png") no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 9999;
    animation: arrow 2s linear infinite;
  }
  @keyframes arrow {
      50% {
          opacity: 0.5;
          bottom: 40px;
      }
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
      ul {
        display: flex;
        li {
          margin: 0 30px;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }
        .tab-active {
          color: #DDAB50;
        }
        li:hover{
          color: #DDAB50;
        }
      }
    }
  }
  .header-bg{
    background: #191919;
  }
  .home{
  	@at-root &-index{
  		background: url(../../static/images/home-index.png) no-repeat center;
      background-size: 100% 100%;
      @at-root &-text{
        width: 700px;
        margin: 290px auto 0;
        text-align: center;
        h1{
          font-size: 60px;
          color: #fff;
        }
        h2{
          font-size: 38px;
          color: #DDAB50;
          margin: 50px auto;
          letter-spacing: 2px;
        }
        h3{
          font-size: 26px;
          font-weight: 100;
          letter-spacing: 3px;
          color: #fff;
          margin: 20px auto 0;
          opacity: 0.8;
        }
      }
      @at-root &-line{
        width: 360px;
        height: 60px;
        line-height: 60px;
        color: #fff;
        font-size: 28px;
        margin: 0 auto;
        opacity: 0.8;
        background: url(../../static/images/line-home.png) no-repeat center;
        background-size: 100% 100%;
      }
  	}
  	@at-root &-project{
  		background: url(../../static/images/home-project.png) no-repeat center;
      background-size: 100% 100%;
      @at-root &-detail{
        width: 280px;
        height: 70px;
        line-height: 70px;
        border: 1px solid #fff;
        text-align: center;
        font-size: 26px;
        margin: 0 auto;
        color: #fff;
        cursor: pointer;
        position: relative;
        i{
          width: 18px;
          height: 18px;
          display: block;
          position: absolute;
          right: 20px;
          top: 26px;
          background: url(../../static/images/icon/triangle.png) no-repeat center;
          background-size: 100% 100%;
        }
        span{
          font-weight: 100;
        }
      }
  	}
  	@at-root &-capital{
  		background: url(../../static/images/home-capital.png) no-repeat center;
      background-size: 100% 100%;
  	}
   @at-root &-about{
      // @at-root &-navBg{
      //   width: 100%;
      //   height: 90px;
      //   background:#191919;
      // }
      .layout{
        width: 1200px;
        margin: 0 auto;
      }
      .about-title{
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
      .logo{
        clear: both;
        overflow: hidden;
        margin-bottom: 80px;
        ul li{
          float: left;
          width: 239px;
          height: 109px;
          line-height: 108px;
          text-align: center;
          border-top: 1px solid rgba(228,228,228,1);
          border-right: 1px solid rgba(228,228,228,1);
          img{
            vertical-align: middle;
          }
        }
        .border-top-none{
          border-top: 0;
        }
        .border-right-none{
          border-right: 0;
        }
      }
      .partners{
        margin-top: 150px;
        text-align: center;
      }
      .guarantee{
        width: 100%;
        height: 280px;
        padding-top: 60px;
        background:rgba(25,25,25,1);
        opacity:0.98;
        text-align: center;
        .about-title{
          .white{
            color: #fff;
            opacity: 0.9;
          }
        }
        .txt{
          p{
            font-size: 24px;
            color: #fff;
            opacity: 0.8;
          }
        }
      }
    }
  }
</style>

<template>
<div>
  <header :class="[3,4].includes(activeIndex)?'header-bg':''">
    <div class="header-wrap">
      <div class="home-logo">
        <img src="../../static/images/logo.png"/>
      </div>
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="tab"
          :class="activeIndex === index && 'tab-active'"
          @click="tabHandle(index)"
        >{{tab}}</li>
      </ul>
    </div>
  </header>
  <div class="home" :class="[0,1,2].includes(activeIndex)?'arrowShow':''">
      <swiper :options="swiperOption">
        <swiper-slide class="home-index">
          <div class="home-index-text">
            <h1>魔方金服</h1>
            <h2>存量（租赁）房产领域交易撮合服务商</h2>
            <div class="home-index-line">
              <span>集优秀资产创无限价值</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="home-project">
          <div class="home-index-text">
            <h1>找项目</h1>
            <h3>FOR PROJECT</h3>
            <h2>发掘优质项目 专业谨慎更可靠</h2>
            <div class="home-project-detail" @click="project()">
              <i></i>
              <span>了解详情</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="home-capital">
          <div class="home-index-text">
            <h1>找资金</h1>
            <h3>FOR  CAPITAL</h3>
            <h2>协助对接资方 选择灵活更便捷</h2>
            <div class="home-project-detail" @click="capital()">
              <i></i>
              <span>了解详情</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="home-about">
          <!-- <div class="home-about-navBg"></div> -->
          <div class="partners">
            <div class="layout">
              <div class="about-title">
                <h1>合作机构</h1>
                <p>COOPERATION AGENCY</p>
                <p class="line"></p>
              </div>
              <div class="logo">
                <ul>
                  <li 
                    v-for="(partner, index) in partners" 
                    :class="{ 'border-top-none': index < 5,'border-right-none':[4, 9].includes(index)}"
                    ><img :src="'../../static/images/'+partner" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="guarantee">
            <div class="about-title">
              <h1 class="white">有力保障</h1>
              <p>POWERFUL GUARAATEE</p>
              <p class="line"></p>
            </div>
            <div class="txt">
              <p>上海正策律师事务所(上海市法协会团体事业单位)提供专业法律支持</p>
            </div>
          </div>
          <comFooter />
        </swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </swiper>
  </div>
</div>
</template>

<script>
  import Vue from 'vue';
  import "swiper/dist/css/swiper.css"
  import { swiper, swiperSlide } from "vue-awesome-swiper"
  import comFooter from '@/components/footer.vue'

  export default {
    data() {
      const self = this;
      return {
        tabs: ['首页', '找项目', '找资金','关于','联系我们'],
        partners:['partner-zgyh.png','partner-pg.png','partner-jg.png','partner-qk.png','partner-isz.png','partner-mnw.png','partner-ybjr.png','partner-bk.png','partner-wly.png','partner-ylcf.png'],
        activeIndex: 0,
        swiper: null,
        swiperOption: {
          autoplay: true,
          mousewheel: true,
          speed:1000,
          direction: 'vertical',
          resistanceRatio : 0,
          on: {
            slideChangeTransitionEnd: function(event) {
              const index = this.activeIndex
              Vue.nextTick(function () {
                self.activeIndex = index
              })
            },
            init: function () {
              self.swiper = this
            }
          },
        }
      }
    },
    methods: {
      tabHandle(index) {
        if (this.swiper === null) return
        this.activeIndex = index
        this.swiper.slideTo(index, 500, false)
      },
      project (){
        this.$router.push({path: '/project'})
      },
      capital (){
        this.$router.push({path: '/capital'})
      }
    },
    components: {
      swiper,
      swiperSlide,
      comFooter
    }
  };
</script>

