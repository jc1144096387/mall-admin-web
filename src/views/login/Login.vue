<template>
  <div class="login">
    <Row type="flex" justify="center" align="middle" @keydown.enter.native="submitLogin">
      <Col style="width: 368px;">
        <!-- 头部logo -->
        <Row>
            <h1 style="text-align:center">电商管理系统</h1>
        </Row>
        <Row v-if="!socialLogining">
          <!-- 登录框 -->
          <Tabs v-model="tabName">
            <TabPane label="账户密码登录" name="username" icon="md-person">
              <Form
                ref="usernameLoginForm"
                :model="form"
                :rules="rules"
                class="form"
                v-if="tabName=='username'"
              >
                <FormItem prop="username">
                  <Input
                    v-model="form.username"
                    prefix="ios-contact"
                    size="large"
                    clearable
                    placeholder="请输入用户名"
                    autocomplete="off"
                  />
                </FormItem>
                <FormItem prop="password">
                  <Input
                    type="password"
                    v-model="form.password"
                    prefix="ios-lock"
                    size="large"
                    clearable
                    placeholder="请输入密码"
                    autocomplete="off"
                  />
                </FormItem>
              </Form>
            </TabPane>
          </Tabs>

          <!-- 登录按钮 -->
          <Row>
            <Button
              class="login-btn"
              type="primary"
              size="large"
              :loading="loading"
              @click="submitLogin"
              long
            >
              <span v-if="!loading">登录</span>
              <span v-else>登录中</span>
            </Button>
          </Row>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
// import {
//   login,
//   userInfo,
//   githubLogin,
//   qqLogin,
//   weiboLogin,
//   getJWT,
//   sendLoginSms,
//   smsLogin,
//   initCaptcha,
//   drawCodeImage,
//   getOtherSet
// } from "@/api/index";
import { validateMobile } from "@/libs/validate";
import Cookies from "js-cookie";
// import Header from "@/views/main-components/header";
// import Footer from "@/views/main-components/footer";
// import LangSwitch from "@/views/main-components/lang-switch";
// import RectLoading from "@/views/my-components/rect-loading";
// import CountDownButton from "@/views/my-components/count-down-button";
import util from "@/libs/util.js";
export default {
  components: {
    // CountDownButton,
    // RectLoading,
    // LangSwitch,
    // Header,
    // Footer
  },
  data() {
    return {
      captchaId: "",
      captchaImg: "",
      loadingCaptcha: true,
      socialLogining: true,
      error: false,
      tabName: "username",
      saveLogin: true,
      getSms: "获取验证码",
      loading: false,
      sending: false,
      errorCode: "",
      form: {
        username: "",
        password: "",
        mobile: "",
        code: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ],
        imgCode: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ],
        mobile: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur"
          },
          {
            validator: validateMobile,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    getCaptchaImg() {
      this.loadingCaptcha = true;
      initCaptcha().then(res => {
        this.loadingCaptcha = false;
        if (res.success) {
          this.captchaId = res.result;
          this.captchaImg = drawCodeImage + this.captchaId;
        }
      });
    },
    sendSmsCode() {
      this.$refs.mobileLoginForm.validate(valid => {
        if (valid) {
          this.sending = true;
          this.getSms = "发送中";
          sendLoginSms(this.form.mobile).then(res => {
            this.getSms = "获取验证码";
            this.sending = false;
            if (res.success) {
              this.$Message.success("发送短信验证码成功");
              // 开始倒计时
              this.$refs.countDown.startCountDown();
            }
          });
        }
      });
    },
    // 登录完成之后
    afterLogin(res) {
      let accessToken = res.result;
      this.setStore("accessToken", accessToken);
      getOtherSet().then(res => {
        if (res.result) {
          let domain = res.result.ssoDomain;
          Cookies.set("accessToken", accessToken, {
            domain: domain,
            expires: 7
          });
        }
      });
      // 获取用户信息
      userInfo().then(res => {
        if (res.success) {
          // 避免超过大小限制
          delete res.result.permissions;
          let roles = [];
          res.result.roles.forEach(e => {
            roles.push(e.name);
          });
          this.setStore("roles", roles);
          this.setStore("saveLogin", this.saveLogin);
          if (this.saveLogin) {
            // 保存7天
            Cookies.set("userInfo", JSON.stringify(res.result), {
              expires: 7
            });
          } else {
            Cookies.set("userInfo", JSON.stringify(res.result));
          }
          this.setStore("userInfo", res.result);
          this.$store.commit("setAvatarPath", res.result.avatar);
          // 加载菜单
          util.initRouter(this);
          this.$router.push({
            name: "home_index"
          });
        } else {
          this.loading = false;
        }
      });
    },
    // 处理 点击登录按钮 事件
    submitLogin() {
      this.$router.push({
        name: "home"
      });
      // this.$refs.usernameLoginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true;
      //     login({
      //       username: this.form.username,
      //       password: this.form.password,
      //       code: this.form.imgCode,
      //       captchaId: this.captchaId,
      //       saveLogin: this.saveLogin
      //     }).then(res => {
      //       if (res.success) {
      //         this.afterLogin(res);
      //       } else {
      //         this.loading = false;
      //         this.getCaptchaImg();
      //       }
      //     });
      //   }
      // });
    },
    relatedLogin() {
      let q = this.$route.query;
      let error = q.error;
      if (error !== "" && error !== undefined) {
        this.$Message.error(error);
      }
      let related = q.related;
      let JWTKey = q.JWTKey;
      if (related && related == "1") {
        if (JWTKey) {
          getJWT({ JWTKey: JWTKey }).then(res => {
            if (res.success) {
              this.socialLogining = true;
              let accessToken = res.result;
              this.setStore("accessToken", accessToken);
              getOtherSet().then(res => {
                if (res.result) {
                  let domain = res.result.ssoDomain;
                  Cookies.set("accessToken", accessToken, {
                    domain: domain,
                    expires: 7
                  });
                }
              });
              // 获取用户信息
              userInfo().then(res => {
                if (res.success) {
                  // 避免超过大小限制
                  delete res.result.permissions;
                  let roles = [];
                  res.result.roles.forEach(e => {
                    roles.push(e.name);
                  });
                  this.setStore("roles", roles);
                  // 保存7天
                  Cookies.set("userInfo", JSON.stringify(res.result), {
                    expires: 7
                  });
                  this.setStore("userInfo", res.result);
                  this.$store.commit("setAvatarPath", res.result.avatar);
                  // 加载菜单
                  util.initRouter(this);
                  this.$router.push({
                    name: "home_index"
                  });
                } else {
                  this.socialLogining = false;
                  this.$Message.error("使用第三方账号登录失败");
                }
              });
            } else {
              this.socialLogining = false;
              this.$Message.error("使用第三方账号登录失败");
            }
          });
        }
      } else {
        this.socialLogining = false;
      }
    }
  },
  mounted() {
    // this.showAccount();
    this.relatedLogin();
    this.getCaptchaImg();
  }
};
</script>

<style lang="less">
@import "./Login.less";
</style>
