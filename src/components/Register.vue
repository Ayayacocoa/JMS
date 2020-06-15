<template>
  <div>
    <!-- 唯一的父 -->
    <!--页面主体-->
    <div class="register">
      <h2>新用户注册</h2>
      <ul>
        <li>
          <span>邮箱：</span>
          <input type="text" id="uname" placeholder="请输入邮箱名" v-model="form.email" />
          <em></em>
          <i></i>
        </li>
        <li>
          <span>密码：</span>
          <input type="password" id="upwd" placeholder="请输入密码" v-model="form.pwd1" />
          <em></em>
          <i></i>
        </li>
        <li>
          <span>重复密码：</span>
          <input type="password" id="upwd2" placeholder="请重复输入密码" v-model="form.pwd2" />
          <em></em>
          <i></i>
        </li>
        <li>
          <span>手机号：</span>
          <input type="text" id="phone" placeholder="请输入手机号" v-model="form.phone" />
          <em></em>
          <i></i>
        </li>
        <li>
          <span>验证码：</span>
          <input type="text" class="inp_yzm" placeholder="请输入验证码" v-model="form.code" />
          <img src="../assets/images/yzm.png" alt />
          <strong class="icon_refresh"></strong>
        </li>
        <li class="li_checkbox">
          <label>
            <input type="checkbox" :checked="form.checked" />
            <span>我已阅读并同意用户注册协议</span>
          </label>
        </li>
        <li class="li_btn">
          <!-- prevent 阻止默认的事件效果 -->
          <button type="button" @click.prevent="doRegister()">提交注册</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    doRegister() {
      //拼接参数字符串
      let params = `uname=${this.form.email}&upwd=${this.form.pwd1}&phone=${this.form.phone}`;

      this.$axios
        .post("user_register.php", params)
        .then(res => {
          console.log(res);
          //   返回值:code=1 说明成功!
          //   登录成功后 记录登录状态, 保持
          if (res.data.code == 1) {
            //靠session长期保存某些信息
            sessionStorage.uname = res.data.uname;
            alert("恭喜, 注册成功! 即将为您跳转到首页!");
            // 代码方式触发跳!
            this.$router.push({ path: "/" });
          } else {
            alert("注册失败!");
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  data() {
    return {
      form: {
        //   用来绑定到 form 上的值
        email: "",
        pwd1: "",
        pwd2: "",
        phone: "",
        code: "",
        checked: true
      }
    };
  }
};
</script>

<style>
</style>