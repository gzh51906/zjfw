<template>
  <div class="centent" v-if="$route.meta.invisible">
    <div class="ChatHead">
      <i class="pic_heard el-icon-s-custom"></i>
      <div class="title_top">
        <span class="user">{{username}}</span>
        <p class="logout">
          <i class="el-icon-warning-outline"></i>
          <span @click="logout">退出登录</span>
        </p>
      </div>
    </div>
    <div class="pay">
      <p v-for="item in pay" :key="item.pay_id" class="pay_for">
        <i :class="item.icon"></i>
        <br />
        <span>{{item.title}}</span>
      </p>
    </div>
    <div class="account">
      <h3>我的账户</h3>
      <p>
        <span>余额（元）</span>
        <br />
        <i class="money">0.00</i>
      </p>
      <p>
        <span>冻结金额（元）</span>
        <br />
        <i class="money">0.00</i>
      </p>
      <div v-for="item in account" :key="item.account_id" class="account_to">
        <i :class="item.icon"></i>
        <br />
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="serve">
      <h3>个人服务</h3>
      <div v-for="item in serve" :key="item.serve_id" class="serve_self">
        <i :class="item.icon"></i>
        <br />
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="di"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      flag: true,
      pay: [
        { pay_id: 1, title: "待付款", icon: "el-icon-wallet" },
        { pay_id: 2, title: "待发货", icon: "el-icon-receiving" },
        { pay_id: 3, title: "待收货", icon: "el-icon-truck" },
        { pay_id: 4, title: "待评价", icon: "el-icon-s-comment" },
        { pay_id: 5, title: "退款/售后", icon: "el-icon-s-order" }
      ],
      account: [
        { account_id: 1, title: "余额", icon: "el-icon-coin" },
        { account_id: 2, title: "充值卡", icon: "el-icon-bank-card" },
        { account_id: 3, title: "我的红包", icon: "el-icon-message" },
        { account_id: 4, title: "优惠券", icon: "el-icon-s-ticket" }
      ],
      serve: [
        { serve_id: 1, title: "账单明细", icon: "el-icon-s-order" },
        { serve_id: 2, title: "地址管理", icon: "el-icon-add-location" },
        { serve_id: 3, title: "我的消息", icon: "el-icon-message" },
        { serve_id: 4, title: "关注店铺", icon: "el-icon-s-shop" },
        { serve_id: 5, title: "浏览历史", icon: "el-icon-time" },
        { serve_id: 6, title: "我的评价", icon: "el-icon-chat-dot-round" },
        { serve_id: 7, title: "收藏商品", icon: "el-icon-star-off" },
        { serve_id: 8, title: "意见反馈", icon: "el-icon-notebook-1" },
        { serve_id: 9, title: "关于我们", icon: "el-icon-warning-outline" }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  },
  created() {
    let username = localStorage.getItem('username');
    this.username = username
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  background-color: #f1f1f1;
}
.ChatHead {
  width: 100%;
  height: 130px;
  padding-top: 30px;
  padding-left: 10px;
  float: left;
  background: linear-gradient(to right, #ffc296, #ff7f9d);
}
.pic_heard {
  display: block;
  border: 1px solid #6666;
  width: 50px;
  height: 50px;
  float: left;
  font-size: 50px;
}
.title_top {
  float: left;
  width: 290px;
  margin-left: 10px;
  line-height: 60px;
}
.title_top span {
  color: #fff;
  font-size: 24px;
}

.logout {
  display: block;
  float: right;
}
.logout > span {
  color: black;
  font-size: 16px;
}
.pay {
  width: 95%;
  height: 80px;
  border: 1px solid #ccc;
  float: left;
  margin-left: 2%;
  padding-top: 10px;
  box-shadow: 5px 7px 5px #6666;
  position: absolute;
  top: 110px;
  background-color: #fff;
}
.pay_for {
  float: left;
  margin-top: 10px;
  text-align: center;
  margin-left: 8%;
}
.pay_for > i {
  font-size: 20px;
}
.pay_for > span {
  font-size: 12px;
}
.account {
  width: 95%;
  height: 180px;
  border: 1px solid #ccc;
  box-shadow: 5px 7px 5px #6666;
  margin-left: 2%;
  position: absolute;
  top: 215px;
  background-color: #fff;
}
.account h3 {
  margin-left: 10px;
  margin-top: 10px;
}
.account p {
  display: inline-block;
  width: 45%;
  height: 40px;
  margin-top: 20px;
}
.account span,
.serve_self span {
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
  color: #000;
}
.account .money {
  margin-left: 10px;
  font-size: 14px;
  color: deeppink;
  font-style: normal;
  font-weight: 700;
}
.account p:nth-child(3) {
  border-left: 1px solid #6666;
  margin-left: 20px;
}
.account_to,
.serve_self {
  float: left;
  text-align: center;
  margin-top: 26px;
  margin-left: 9%;
}
.account_to > i,
.serve_self > i {
  font-size: 26px;
  margin-left: 9px;
}
.serve {
  width: 95%;
  height: 275px;
  border: 1px solid #ccc;
  box-shadow: 5px 7px 5px #6666;
  margin-left: 2%;
  position: absolute;
  top: 425px;
  background-color: #fff;
}
.serve h3 {
  margin-left: 10px;
  margin-top: 10px;
}
.serve_self {
  margin-left: 6%;
}
.di {
  width: 100%;
  height: 35px;
  position: absolute;
  top: 735px;

  background-color: #f1f1f1;
}
</style>