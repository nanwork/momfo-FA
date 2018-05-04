<template>
<div>
  <header>
    <div class="home-logo">
    	<img src="../assets/images/logo.png"/>
    </div>
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="tab"
        :class="activeIndex === index && 'tab-active'"
        @click="tabHandle(index)"
      >{{tab}}</li>
    </ul>
  </header>
  <div class="home" :class="activeIndex != 3 && 'arrowShow'">
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
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </swiper>
  </div>
</div>
</template>
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
    background: url("../assets/images/swiper-slide.png") no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 9999;
    -webkit-animation: arrow 2s linear infinite;
    -o-animation: arrow 2s linear infinite;
    -moz-animation: arrow 2s linear infinite;
    animation: arrow 2s linear infinite;
  }
  @-webkit-keyframes arrow{
      50% {
          opacity: 0.5;
          bottom: 40px;
      }
  }
  @-moz-keyframes arrow{
      50% {
          opacity: 0.5;
          bottom: 40px;
      }
  }
  @-o-keyframes arrow{
      50% {
          opacity: 0.5;
          bottom: 40px;
      }
  }
  @keyframes arrow {
      50% {
          opacity: 0.5;
          bottom: 40px;
      }
  }
  .tab-active {
    color: #DDAB50;
  }
  header {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 1200px;
    z-index: 1;
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
    }
  }
  .home{
  	@at-root &-index{
  		background: url(../assets/images/home-index.png) no-repeat center;
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
        background: url(../assets/images/line-home.png) no-repeat center;
        background-size: 100% 100%;
      }
  	}
  	@at-root &-project{
  		background: url(../assets/images/home-project.png) no-repeat center;
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
          background: url(../assets/images/icon/triangle.png) no-repeat center;
          background-size: 100% 100%;
        }
        span{
          font-weight: 100;
        }
      }
  	}
  	@at-root &-capital{
  		background: url(../assets/images/home-capital.png) no-repeat center;
      background-size: 100% 100%;
  	}
  }
</style>
<script>
  import Vue from 'vue';
  import "swiper/dist/css/swiper.css"
  import { swiper, swiperSlide } from "vue-awesome-swiper"

  export default {
    data() {
      const self = this;
      return {
        tabs: ['首页', '找项目', '找资金','关于','联系我们'],
        activeIndex: 0,
        swiper: null,
        swiperOption: {
          autoplay: true,
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
      swiperSlide
    }
  };
</script>
