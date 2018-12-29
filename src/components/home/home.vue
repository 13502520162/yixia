<template>
  <div class="home" ref="home">
    <div class="search">
      <input type="text" class="search-ipt" placeholder="分期乐">
      <i class="iconfont">&#xe62f;</i>
    </div>
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="banner-title"></div>
          <div class="banner-content">
            <img
              src="../../assets/images/banner.png"
            >
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner-title"></div>
          <div class="banner-content">
            <img
              src="http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
            >
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner-title"></div>
          <div class="banner-content">
            <img
              src="http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
            >
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <div class="headlines">
      <div class="headlines-tit">
        <p class="top">头条</p>
        <p class="bottom">资讯</p>
      </div>
      <div class="headlines-con">
        <p>
          <span class="con-dai">多米</span>
          <span class="con-content">稳、准、狠！选出合适的贷款产品！</span>
        </p>
        <p>
          <span class="con-dai">多米</span>
          <span class="con-content">个人信用贷款申请条件有哪些？</span>
        </p>
      </div>
    </div>
    <div class="loan-details">
      <div class="loan-details-top">
        <router-link tag="div" to="/home/popular">
          <i class="iconfont one">&#xe606;</i> 热门推荐
        </router-link>
        <router-link tag="div" to="/home/extremespeed">
          <i class="iconfont two">&#xe6b9;</i> 极速放款
        </router-link>
        <router-link tag="div" to="/home/highvolume">
          <i class="iconfont three">&#xe6a0;</i> 高额贷款
        </router-link>
      </div>
      <div class="loan-details-bottom">
        <div class="loan-daquan">
       <!--   <p class="title">贷款大全</p>
          <p class="detail">海量产品任你选</p>-->
          <img src="../../assets/images/推荐.png" alt="">
        </div>
        <div class="loan-other">
          <div class="latest-online">
           <!-- <p class="title">最新上线</p>
            <p class="detail">优惠多，降息大</p>
            <p class="icon">
              <i class="iconfont">&#xe646;</i>
            </p>-->
            <img src="../../assets/images/大额精选.png" alt="">
          </div>
          <div class="intelligent-loan-selection">
         <!--   <p class="title">智能选贷款</p>
            <p class="detail">为你量身定做</p>
            <p class="icon">
              <i class="iconfont">&#xe671;</i>
            </p>-->
            <img src="../../assets/images/即刻申请.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="other-recommendations">
      <div class="title">
        <span class="title-other">推荐贷款</span>
        <span class="title-more">更多 ></span>
      </div>
      <cont></cont>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import cont from '@/components/home/contentA'
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 100
      }
    }
  },
  components: {
    cont
  }
}
</script>

<style scoped lang='less'>
.swiper-container{
  overflow:initial;
}
.home {
  height: calc(100% - 1rem);
  overflow: hidden;
  padding-bottom: 1rem;
}
.search {
  position: fixed;
  width: 100%;
  z-index: 3;
  padding: 0.2rem;
  padding-left: 0.5rem;
  background: #059ff9;
  input {
    width: 70%;
    border-radius: 0.2rem;
    text-align: center;
    height: 0.4rem;
    color: #000;
  }
  .iconfont {
    float: right;
    margin-right: 0.8rem;
    font-size: 0.4rem;
    color: #fff;
  }
}
.banner {
  width: 100%;
  position: relative;
  float: left;
  height: 3.2rem;
  overflow: hidden;
  .banner-title {
    width: 100%;
    height: 2.2rem;
    background: rgb(5, 159, 249);
    z-index: 1;
  }
  .banner-content {
    padding: 0 0.4rem;
    width: 100%;
    box-sizing: border-box;
    height: 2.2rem;
    position: absolute;
    top: 0.9rem;
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
}
.headlines {
  width: 100%;
  height: 1.2rem;
  line-height: 0.54rem;
  overflow: hidden;
  display: flex;
  background: rgb(236, 236, 236);
  padding-bottom: 0.2rem;
  .headlines-tit {
    flex: 0 0 1.5rem;
    text-align: center;
    font-weight: 700;
    background: #fff;
    padding: 0 0.2rem;
    .top {
      color: #188ae2;
      border-right: 1px solid rgb(224, 224, 224);
      font-size: 0.32rem;
    }
    .bottom {
      border-right: 1px solid rgb(224, 224, 224);
      font-size: 0.32rem;
    }
  }
  .headlines-con {
    flex: 1;
    background: #fff;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }
    .con-dai {
      border: 1px solid rgb(109, 174, 222);
      font-size: 10px;
      color: rgb(109, 174, 222);
      margin-right: 0.2rem;
      vertical-align: top;
    }
    .con-content {
      color: #333;
      display: inline-block;
      vertical-align: top;
    }
  }
}
.loan-details {
  width: 100%;
  margin-bottom: .5rem;
  .loan-details-top {
    height: 1rem;
    line-height: 1rem;
    display: flex;
    div {
      flex: 1;
      height: 100%;
      text-align: center;
      display: inline-block;
      font-weight: bold;
      i {
        font-size: 0.45rem;
        vertical-align: top;
      }
      .one {
        color: red;
      }
      .two {
        color: #188ae2;
      }
      .three {
        color: red;
      }
    }
  }
  .loan-details-bottom {
    height: 2.5rem;
    display: flex;
    padding: 0.3rem;
    padding-bottom: 0;
    .loan-daquan {
      flex: 1;
      background: rgb(252, 231, 224);
      border-radius: 5px;
      margin-right: 0.3rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .loan-other {
      flex: 1;
      .latest-online {
        height: calc(54% - 0.3rem);
        border-radius: 5px;
        background: rgb(255, 253, 230);
        margin-bottom: 0.3rem;
/*        padding-top: 0.25rem;
        padding-left: 0.1rem;*/
        box-sizing: border-box;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        .icon {
          position: absolute;
          right: 0.1rem;
          bottom: 0.1rem;
          width: 0.8rem;
          height: 0.8rem;
          line-height: 0.8rem;
          text-align: center;
          background: rgb(249, 236, 220);
          border-radius: 50%;
          i {
            font-size: 0.5rem;
            color: red;
          }
        }
      }
      .intelligent-loan-selection {
        height: 45%;
        border-radius: 5px;
        background: rgb(231, 248, 255);
/*        padding-top: 0.32rem;
        padding-left: 0.1rem;*/
        box-sizing: border-box;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        .icon {
          position: absolute;
          right: 0.1rem;
          bottom: 0.1rem;
          width: 0.8rem;
          height: 0.8rem;
          line-height: 0.8rem;
          text-align: center;
          background: rgb(204, 245, 251);
          border-radius: 50%;
          i {
            font-size: 0.5rem;
            color: #059ff9;
          }
        }
      }
    }
  }
  .title {
    font-weight: 700;
    font-size: 16px;
  }
  .detail {
    color: #999;
    font-size: 12px;
  }
}
.other-recommendations {
  background: #F8F7F9;
  .title {
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.3rem;
    color:#000;
    font-weight: 700;
    border-bottom: 1px solid #e0e0e0;
    .title-more {
      float: right;
    }
  }
  .content {
    .content-li {
      padding: 0.3rem;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      .left {
        flex: 1;
        border-right: 1px solid rgb(189, 189, 189);
        .left-top {
          box-sizing: border-box;
          .left-top-img {
            float: left;
            width: 1.2rem;
          }
          .left-top-con {
            height: 100%;
            line-height: 0.6rem;
            .tit {
              font-weight: 700;
              font-size: 16px;
            }
          }
        }
        .left-bottom {
          margin-top: 0.12rem;
          color: rgb(148, 148, 148);
          span {
            margin-right: 0.3rem;
          }
        }
      }
      .right {
        flex: 0 0 3rem;
        line-height: 0.56rem;
        text-align: center;
        .maximum-borrowable {
          color: #949494;
          font-size: 10px;
        }
        .money {
          font-size: 16px;
          font-weight: 700;
        }
        .immediate-borrowing {
          background: rgb(46, 148, 234);
          color: #fff;
          border-radius: 4px;
          height: 0.6rem;
          width: 1.4rem;
          margin-left: 0.8rem;
        }
      }
    }
  }
}
</style>
