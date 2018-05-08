<style lang="scss" scoped>
  .footer{
    height: 170px;
    width: 100%;
    background:rgba(18,18,18,1);
    padding-top: 30px;
    @at-root &-layout{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    @at-root &-map{
      margin-top: 30px;
    }
    @at-root &-logo{
      width: 200px;
      height: 100%;
      text-align: center;
    }
    @at-root &-contact{
      width: 470px;
      height: 100%;
      position: relative;
      h3{
        font-size: 18px;
        color: #fff;
        margin-bottom: 30px;
      }
      .line{
        display: block;
        height: 2px;
        width: 30px;
        background: #DCAA58;
        position: absolute;
        top: 25px;
        left: 0px;
      }
      p{
        color: #fff;
        font-size: 16px;
        line-height: 34px;
        opacity: 0.8;
        letter-spacing: 1px;
      }
    }
    @at-root &-code{
      width: 220px;
      padding-top: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      figure{
        text-align: center;
        figcaption{
          color: #fff;
          font-size: 16px;
          margin-top: 15px;
          opacity: 0.8;
        }
      }
    }
  }
</style>

<template>
  <div class="footer">
    <div class="footer-layout">
      <div class="footer-logo">
        <img src="../../static/images/logo.png" alt="">
        <img src="../../static/images/footer-map.png" alt="" class="footer-map">
      </div>
      <div class="footer-contact">
        <h3>联系我们</h3>
        <span class="line"></span>
        <p>联系电话：17301873832&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子信箱：bd@momfo.com</p>
        <p>官方网站：www.momfofintech.com</p>
        <p>公司地址：上海市长宁区金钟路968号凌空SOHO3号楼901室</p>
      </div>
      <div class="footer-code">
        <figure>
            <img src="../../static/images/footer-momfo-code.png" alt="">
            <figcaption>关注我们</figcaption>
        </figure>
        <figure>
            <img src="../../static/images/footer-service-code.png" alt="">
            <figcaption>客服微信</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
