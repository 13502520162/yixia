<template>
  <div class="content">
    <ul>
     <!-- <li class="content-li" v-for="(item,index) of list" :key="index">
        <div class="left">
          <div class="left-top">
            <img class="left-top-img" src="../../assets/images/掏钱宝.png" alt>
            <div class="left-top-con">
              <p class="tit">{{item.tit}}</p>
              <p class="content">
                日利率:
                <span>{{item.interestRate}}</span>
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
          <p class="money">￥{{item.money}}</p>
          <p class="immediate-borrowing">立即借款</p>
        </div>
      </li>-->
      <li class="content-li">
        <div class="left">
          <div class="left-top">
            <img class="left-top-img" src="../../assets/images/掏钱宝.png" alt>
            <div class="left-top-con">
              <p class="tit">掏钱宝</p>
              <p class="content">
                日利率:
                <span>0.02-0.1%</span>
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
            <img class="left-top-img" src="../../assets/images/大王贷款.png" alt>
            <div class="left-top-con">
              <p class="tit">大王贷款</p>
              <p class="content">
                日利率:
                <span>0.02-0.1%</span>
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
            <img class="left-top-img" src="../../assets/images/凡人贷款.png" alt>
            <div class="left-top-con">
              <p class="tit">凡人贷款</p>
              <p class="content">
                日利率:
                <span>0.02-0.1%</span>
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
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      list: [
        {
          img: '../../assets/images/掏钱宝.png',
          tit: '你我贷',
          interestRate: '0.02-01%',
          detail: ['高额度', '放款快', '极速到账'],
          money: '30,000'
        },
        {
          img: '../../assets/images/大王贷款.png',
          tit: '你我贷',
          interestRate: '0.02-01%',
          detail: ['高额度', '放款快', '极速到账'],
          money: '30,000'
        },
        {
          img: '../../assets/images/凡人贷款.png',
          tit: '你我贷',
          interestRate: '0.02-01%',
          detail: ['高额度', '放款快', '极速到账'],
          money: '30,000'
        },
        {
          img: '../../assets/images/大王贷款-1.png',
          tit: '你我贷',
          interestRate: '0.02-01%',
          detail: ['高额度', '放款快', '极速到账'],
          money: '30,000'
        }
      ]
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
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
            width: .8rem;
          }
          .left-top-con {
            height: 100%;
            line-height: 0.45rem;
            margin-left: .9rem;
            .tit {
              font-weight: 700;
              font-size: 16px;
            }
            .content{
              color: #C6C6C6;
              span{
                color: #989797;
              }
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
</style>
