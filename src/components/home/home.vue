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
              src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
            >
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="headlines">
      <div class="headlines-tit">
        <p class="top">头条</p>
        <p class="bottom">资讯</p>
      </div>
      <div class="headlines-con">
        <p>
          <span class="con-dai">贷款</span>
          <span class="con-content">2分钟教你如何融360提额</span>
        </p>
        <p>
          <span class="con-dai">贷款</span>
          <span class="con-content">2分钟教你如何融360提额</span>
        </p>
      </div>
    </div>
    <div class="loan-details">
      <div class="loan-details-top">
        <div>热门推荐</div>
        <div>极速放款</div>
        <div>高额贷款</div>
      </div>
      <div class="loan-details-bottom">
        <div class="loan-daquan">
          <p class="title">贷款大全</p>
          <p class="detail">海量产品任你选</p>
        </div>
        <div class="loan-other">
          <div class="latest-online">
            <p class="title">最新上线</p>
            <p class="detail">优惠多，降息大</p>
          </div>
          <div class="intelligent-loan-selection">
            <p class="title">智能选贷款</p>
            <p class="detail">为你量身定做</p>
          </div>
        </div>
      </div>
    </div>
    <div class="other-recommendations">
      <div class="title">
        <span class="title-other">其他推荐</span>
        <span class="title-more">更多 ></span>
      </div>
      <div class="content">
        <ul>
          <li class="content-li">
            <div class="left">
              <div class="left-top">
                <img class="left-top-img" src="../../assets/images/dai.png" alt>
                <div class="left-top-con">
                  <p class="tit">你我贷</p>
                  <p class="content">
                    日利率:
                    <span>0.02-01%</span>
                  </p>
                </div>
              </div>
              <div class="left-bottom">
                <span>高额度</span>
                <span>放款快</span>
                <span>极速到账</span>
              </div>
            </div>
            <div class="right">
              <p class="maximum-borrowable">最高可借</p>
              <p class="money">￥30,000</p>
              <p class="immediate-borrowing">立即借款</p>
            </div>
          </li>
          <li class="content-li">
            <div class="left">
              <div class="left-top">
                <img class="left-top-img" src="../../assets/images/dai.png" alt>
                <div class="left-top-con">
                  <p class="tit">你我贷</p>
                  <p class="content">
                    日利率:
                    <span>0.02-01%</span>
                  </p>
                </div>
              </div>
              <div class="left-bottom">
                <span>高额度</span>
                <span>放款快</span>
                <span>极速到账</span>
              </div>
            </div>
            <div class="right">
              <p class="maximum-borrowable">最高可借</p>
              <p class="money">￥30,000</p>
              <p class="immediate-borrowing">立即借款</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
export default {
  data () {
    return {
      swiperOption: {
        autoplay: 3000
      }
    };
  },
  mounted () {
    this.$nextTick( () => {
     this.scroll = new BScroll(this.$refs.home);
    });
  },
  components: {}
};
</script>

<style scoped lang='less'>
.home {
  height: calc(100% - 1rem);

}
.search {
  position: fixed;
  width: 100%;
  top: 0.2rem;
  z-index: 3;
  padding-left: 0.5rem;
  input {
    width: 70%;
    border-radius: 0.2rem;
    text-align: center;
    height: 0.5rem;
    color: #000;
  }
  .iconfont {
    float: right;
    margin-right: 0.8rem;
    margin-top: 0.1rem;
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
    .con-dai {
      border: 1px solid rgb(109, 174, 222);
      font-size: 10px;
      color: rgb(109, 174, 222);
      margin-right: 0.2rem;
      vertical-align: top;
    }
    .con-content {
      color: #999;
      display: inline-block;
      vertical-align: top;
    }
  }
}
.loan-details {
  width: 100%;
  .loan-details-top {
    height: 1rem;
    line-height: 1rem;
    display: flex;
    div {
      flex: 1;
      height: 100%;
      text-align: center;
      display: inline-block;
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
      padding: 0.25rem 0 0 0.1rem;
    }
    .loan-other {
      flex: 1;
      .latest-online {
        height: calc(54% - 0.3rem);
        border-radius: 5px;
        background: rgb(255, 253, 230);
        margin-bottom: 0.3rem;
        padding-top: 0.25rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
      }
      .intelligent-loan-selection {
        height: 45%;
        border-radius: 5px;
        background: rgb(231, 248, 255);
        padding-top: 0.32rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
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
  .title {
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.3rem;
    border-bottom: 1px solid #e0e0e0;
    .title-more {
      float: right;
      color: #999;
    }
  }
  .content {
    .content-li {
      padding: 0.3rem;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      .left {
        flex: 1;
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
        }
      }
    }
  }
}
</style>
