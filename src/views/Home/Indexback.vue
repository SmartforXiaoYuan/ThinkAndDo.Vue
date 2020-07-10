<template>
  <div class="home">
    <div v-loading="loading" element-loading-text="加载中..." style="min-height: 35vw;" v-if="!error">
      <div class="banner">
        <div class="page"></div>
      </div>

      <div v-for="(item,i) in home" :key="i">
        <div class="activity-panel" v-if="item.type === 1">
         <ul class="box">
          <li class="content" v-for="(iitem,j) in item.panelContents" :key="j" @click="linkTo(iitem)">
            <img class="i" :src="iitem.picUrl">
            <a class="cover-link"></a>
          </li>
        </ul>
        </div>

        <section class="w mt30 clearfix" v-if="item.type === 2">
          <y-shelf :title="title"></y-shelf>
        </section>

        <section class="w mt30 clearfix" v-if="item.type === 3">
          <y-shelf :title="title"></y-shelf>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import YShelf from "@/components/shelf";
export default {
  components: {
    YShelf
  },
  data() {
    return {
      error: false,
      loading: true,
      title: "测试测试",
      home: []
    };
  },
  methods: {
        linkTo (item) {
        if (item.type === 0 || item.type === 2) {
          // 关联商品
          this.$router.push({
            path: '/goodsDetails',
            query: {
              productId: item.productId
            }
          })
        } else {
          // 完整链接
          window.location.href = item.fullUrl
        }
      },
  },
  mounted() {
    this.home = []
      
  },
  created() {}
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>