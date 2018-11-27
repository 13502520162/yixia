<template>
  <div class="home">
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="banner-title"></div>
          <div class="banner-content">
            <img src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" alt>
          </div>
        </swiper-slide>
            <swiper-slide>
          <div class="banner-title"></div>
          <div class="banner-content">
            <img src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" alt>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return{
      swiperOption: {
        autoplay: 3000
      }
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.banner {
  width: 100%;
  position: relative;
  float: left;
  height: 0;
  padding-bottom: 42%;
  overflow: hidden;
  .banner-title {
    width: 100%;
    height: 2.2rem;
    background: rgb(5, 159, 249);
    z-index: 1;
  }
  .banner-content {
    padding: 0 0.5rem;
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
</style>
