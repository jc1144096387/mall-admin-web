<template>
  <div>
    <Row class-name="home-page-row1" :gutter="10">
      <Col :md="12" :lg="24" :style="{marginBottom: '10px'}">
        <Card>
          <Row type="flex" class="user-infor">
            <Col span="8">
              <Row class-name="made-child-con-middle" type="flex" align="middle">
                <img class="avator-img" :src="avatarPath" />
              </Row>
            </Col>
            <Col span="16" style="padding-left:6px;">
              <Row class-name="made-child-con-middle" type="flex" align="middle">
                <div>
                  <b class="card-user-infor-name">{{ username }}</b>
                  <p>欢迎您的使用</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import avatar from '@/assets/vip.png'
export default {
  name: "home",
  components: {

  },
  data() {
    return {
      avatarPath: avatar,
      username: "admin",
    };
  }
};
</script>

<style lang='less'>
@import "./Home.less";
</style>