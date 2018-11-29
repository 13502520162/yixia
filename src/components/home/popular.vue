<template>
  <div class="popular">
      <div class="popular-tit">
          <router-link class="fanhui" tag="span" to='/home'><i class="iconfont">&#xe67e;</i></router-link>
          <span>热门推荐</span>
      </div>
      <cont></cont>
  </div>
</template>

<script type="text/ecmascript-6">
import cont from '@/components/home/contentA'
export default {
  data () {
    return {}
  },
  components: {
    cont
  }
}
</script>

<style scoped lang="less">
.popular{
  height: calc(100% - 1rem);
  overflow: hidden;
  padding-bottom: 1rem;
}
.popular-tit{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
    .fanhui{
        float: left;
        display: inline-block;
        padding: 0 .1rem;
        margin-left: .1rem;
        color: #ccc;
    }
    span{
        font-weight: 700;
    }
}
</style>
