<template>
  <div class="singlePage gray">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid :gutter="10" :column-num="3" class="my-grid">
      <van-grid-item v-for="value in 9" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" >
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem } from 'vant'
export default {
  name: 'home',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-grid{
  padding-top: 10px;
}
</style>