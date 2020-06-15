<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>公司动态</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="news">
        <ul>
          
          <li v-for="(item, index) in news.data" :key="index">
            <span>{{ item.pubTime | dateformat }}</span>
            <router-link
              :to="{ path: '/newsdetail', query: { nid: item.nid } }"
              >{{ item.title }}</router-link
            >
          </li>
          <!--<li><span>2016-02-21</span><a href="">净美仕新风净化 `系统助力校园新风行动</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">全国新风行动全面启动 助推净美仕战略升级</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">智能空气净化器翻盘：净美仕能否领衔?</a></li>-->
        </ul>
      </div>
      <!-- 分页导航-->
      <div class="pages">
        
        <a v-show="news.pageNum > 1" @click="news.pageNum--; getMoreNews()">上一页</a>
        <!--<a href="" class="cur">1</a>-->
        
        <a v-for="curP in news.pageCount" :key="curP" @click="news.pageNum=curP; getMoreNews()" :class="{cur: news.pageNum==curP}">
        {{curP}}
        </a>
        <!--<a href="">3</a>-->
        <!--<a href="">4</a>-->
        <!--<a href="">5</a>-->
        <a v-show="news.pageNum < news.pageCount" @click="news.pageNum++; getMoreNews()" >下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: {}
    };
  },
  
  methods: {
    getMoreNews(){
      let page = this.news.pageNum
      this.$axios.post("news_select.php", "pageNum="+page)
      .then(res => {
        console.log(res)
        this.news = res.data
      })
      .catch(err => {
        console.error(err); 
      })
    }
  },
  // 挂载成功时的钩子: 生命周期
  mounted() {
    this.$axios
      .post("news_select.php", "pageNum=1")
      .then(res => {
        console.log(res);
        this.news = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    dateformat: function(timestamp) {
      var time1 = parseInt(timestamp);

      var t = new Date(time1);
      var year = t.getFullYear();
      var month = t.getMonth() + 1;
      var day = t.getDate();

      return year + "-" + month + "-" + day;
    }
  }
};
</script>

<style></style>
