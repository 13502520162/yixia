<template>
  <div id="app">
    <div class="fixed">
      <router-link to="/home" tag="div" class="item">
        <i class="iconfont">&#xe62e;</i>
        <p>首页</p>
      </router-link>
      <router-link to="/credit" tag="div" class="item">
        <i class="iconfont">&#xe64f;</i>
        <p>信贷</p>
      </router-link>
      <router-link to="/my" tag="div" class="item">
        <i class="iconfont">&#xe62f;</i>
        <p>我的</p>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import home from "@/components/home/home";
import credit from "@/components/credit/credit";
import my from "@/components/my/my";
export default {
  name: "App",
  components: {
    home,
    credit,
    my
  }
};
</script>

<style scoped lang='less'>
.fixed {
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  height: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  .item {
    box-sizing: border-box;
    flex: 1;
    text-align: center;
    i{
      font-size: 0.42rem;
    }
  }
  .router-link-active {
    color: red;
  }
}
</style>
