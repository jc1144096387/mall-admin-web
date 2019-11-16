<style scoped lang='less'>
@import "./Main.less";
</style>
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider
        class="sider"
        ref="side1"
        breakpoint="md"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <!-- 侧边栏顶部logo -->
        <div class="logo-con">
          <router-link :to="{name:'home'}">
          <img v-show="!isCollapsed" src="@/assets/logo.png" key="max-logo" />
          <img v-show="isCollapsed" src="@/assets/logo-min.png" key="min-logo" />
          </router-link>
        </div>
        <Menu :active-name="$route.name" theme="dark" width="auto" :class="menuitemClasses" >
          <MenuItem name="user-manage" :to="{name:'user-manage'}">
            <Icon type="ios-navigate"></Icon>
            <span>用户管理</span>
          </MenuItem>
          <MenuItem name="goods-manage" :to="{name:'goods-manage'}">
            <Icon type="ios-search"></Icon>
            <span>商品管理</span>
          </MenuItem>
          <MenuItem name="order-manage" :to="{name:'order-manage'}">
            <Icon type="ios-settings"></Icon>
            <span>订单管理</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
          <div class="user-dropdown-menu-con">
            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
              <Button @click="logout" type="primary" shape="circle" style="margin-right:20px">登出</Button>
            </Row>
          </div>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    // 点击登出按钮
    logout(){
      this.$router.push({
        name: 'login'
      })
    }
  }
};
</script>
