<style lang="less">
@import "./GoodsManage.less";
</style>
<template>
  <div class="search">
    <Row>
      <Col>
        <Card>
          <!-- 多条件搜索栏 -->
          <Row @keydown.enter.native="handleSearch">
            <Form ref="searchForm" :model="searchForm" inline :label-width="70" class="search-form">
              <!-- 根据业务需求修改以下代码 -->
              <Form-item label="商品id" prop="goodsId">
                <Input
                  type="text"
                  v-model="searchForm.goodsId"
                  placeholder="请输入商品id"
                  clearable
                  style="width: 200px"
                />
              </Form-item>
              <span v-if="drop">
                <Form-item label="商品名" prop="title">
                  <Input
                    type="text"
                    v-model="searchForm.title"
                    placeholder="请输入商品名"
                    clearable
                    style="width: 200px"
                  />
                </Form-item>
                <Form-item label="商品类型" prop="type">
                  <Input
                    type="text"
                    v-model="searchForm.type"
                    placeholder="请输入商品类型"
                    clearable
                    style="width: 200px"
                  />
                </Form-item>
                <Form-item label="商品图片" prop="img">
                  <Input
                    type="text"
                    v-model="searchForm.img"
                    placeholder="请输入商品图片"
                    clearable
                    style="width: 200px"
                  />
                </Form-item>
                <Form-item label="商品单价" prop="price">
                  <Input
                    type="text"
                    v-model="searchForm.price"
                    placeholder="请输入商品单价"
                    clearable
                    style="width: 200px"
                  />
                </Form-item>
                <Form-item label="商品简介" prop="content">
                  <Input
                    type="text"
                    v-model="searchForm.content"
                    placeholder="请输入商品简介"
                    clearable
                    style="width: 200px"
                  />
                </Form-item>
                <Form-item label="商品状态" prop="status">
                  <Input
                    type="text"
                    v-model="searchForm.status"
                    placeholder="请输入商品状态"
                    clearable
                    style="width: 200px"
                  />
                </Form-item>
                <Form-item label="商品库存" prop="count">
                  <Input
                    type="text"
                    v-model="searchForm.count"
                    placeholder="请输入商品库存"
                    clearable
                    style="width: 200px"
                  />
                </Form-item>
              </span>
              <Form-item style="margin-left:-35px;" class="br">
                <Button @click="handleSearch" type="primary" icon="ios-search">搜索</Button>
                <Button @click="handleReset">重置</Button>
                <a class="drop-down" @click="dropDown">
                  {{dropDownContent}}
                  <Icon :type="dropDownIcon"></Icon>
                </a>
              </Form-item>
            </Form>
          </Row>
          <!-- 功能操作栏 -->
          <Row class="operation">
            <Button @click="add" type="primary" icon="md-add">添加商品</Button>
            <Button @click="delAll" icon="md-trash">批量删除</Button>
            <Dropdown @on-click="handleDropdown">
              <Button>
                更多操作
                <Icon type="md-arrow-dropdown" />
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem name="refresh">刷新</DropdownItem>
                <DropdownItem name="reset">重置商品密码</DropdownItem>
                <DropdownItem name="exportData">导出所选数据</DropdownItem>
                <DropdownItem name="exportAll">导出全部数据</DropdownItem>
                <DropdownItem name="importData">导入数据</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Row>
          <!-- 选择提示栏 -->
          <Row>
            <Alert show-icon>
              已选择
              <span class="select-count">{{selectCount}}</span> 项
              <a class="select-clear" @click="clearSelectAll">清空</a>
            </Alert>
          </Row>
          <!-- 主表格 -->
          <Row>
            <Table
              :loading="loading"
              border
              :columns="columns"
              :data="data"
              sortable="custom"
              @on-sort-change="changeSort"
              @on-selection-change="showSelect"
              ref="table"
            ></Table>
          </Row>
          <!-- 分页栏 -->
          <Row type="flex" justify="end" class="page">
            <Page
              :current="searchForm.pageNumber"
              :total="total"
              :page-size="searchForm.pageSize"
              @on-change="changePage"
              @on-page-size-change="changePageSize"
              :page-size-opts="[10,20,50]"
              size="small"
              show-total
              show-elevator
              show-sizer
            ></Page>
          </Row>
        </Card>
      </Col>
    </Row>
    <!-- 新增/编辑 模态框 -->
    <Modal :title="modalTitle" v-model="modalVisible" :mask-closable="false" :width="500">
      <Form ref="form" :model="form" :label-width="100" :rules="formValidate">
        <!-- 根据业务需求修改以下代码 -->
        <Form-item label="商品id" prop="goodsId">
          <Input
            type="text"
            v-model="form.goodsId"
            placeholder="请输入商品id"
            clearable
            style="width: 100%"
          />
        </Form-item>
        <Form-item label="商品名" prop="title">
          <Input
            type="text"
            v-model="form.title"
            placeholder="请输入商品名"
            clearable
            style="width: 100%"
          />
        </Form-item>
        <Form-item label="商品类型" prop="type">
          <Input
            type="text"
            v-model="form.type"
            placeholder="请输入商品类型"
            clearable
            style="width: 100%"
          />
        </Form-item>
        <Form-item label="商品图片" prop="img">
          <Input
            type="text"
            v-model="form.img"
            placeholder="请输入商品图片"
            clearable
            style="width: 100%"
          />
        </Form-item>
        <Form-item label="商品单价" prop="price">
          <Input
            type="text"
            v-model="form.price"
            placeholder="请输入商品单价"
            clearable
            style="width: 100%"
          />
        </Form-item>
        <Form-item label="商品简介" prop="content">
          <Input
            type="text"
            v-model="form.content"
            placeholder="请输入商品简介"
            clearable
            style="width: 100%"
          />
        </Form-item>
        <Form-item label="商品状态" prop="status">
          <Input
            type="text"
            v-model="form.status"
            placeholder="请输入商品状态"
            clearable
            style="width: 100%"
          />
        </Form-item>
        <Form-item label="商品库存" prop="count">
          <Input
            type="text"
            v-model="form.count"
            placeholder="请输入商品库存"
            clearable
            style="width: 100%"
          />
        </Form-item>
      </Form>
      <div slot="footer">
        <Button type="text" @click="modalVisible=false">取消</Button>
        <Button type="primary" :loading="submitLoading" @click="handleSubmit">提交</Button>
      </div>
    </Modal>
    <!-- 自定义导出数据 模态框-->
    <Modal
      v-model="exportModalVisible"
      :title="exportTitle"
      :loading="loadingExport"
      @on-ok="exportCustomData"
    >
      <Form ref="exportForm" :label-width="85">
        <FormItem label="导出文件名">
          <Input v-model="filename" />
        </FormItem>
        <FormItem label="自定义导出列">
          <CheckboxGroup v-model="chooseColumns">
            <Checkbox
              v-for="(item, i) in exportColumns"
              :label="item.title"
              :key="i"
              :value="item.checked"
              :disabled="item.disabled"
            ></Checkbox>
          </CheckboxGroup>
        </FormItem>
      </Form>
    </Modal>
    <!-- 导入数据 模态框-->
    <Drawer title="导入数据" closable v-model="importModalVisible" width="1000">
      <Upload action :before-upload="beforeUploadImport" accept=".xls, .xlsx">
        <Button icon="ios-cloud-upload-outline" style="margin-right:10px">上传Excel文件</Button>
        <span v-if="uploadfile.name!=''">当前选择文件：{{ uploadfile.name }}</span>
      </Upload>
      <Alert type="warning" show-icon>导入前请下载查看导入模版数据文件，确保数据格式正确，不得修改列英文名称。必需数据字段：商品名(唯一)、密码(明文)</Alert>
      <Table
        :columns="importColumns"
        border
        :height="height"
        :data="importTableData"
        ref="importTable"
      ></Table>
      <div class="drawer-footer">
        <Button @click="downloadTemple" type="info" style="position:absolute;left:15px;">下载导入模板</Button>
        <Button @click="importModalVisible=false">关闭</Button>
        <Button
          :loading="importLoading"
          :disabled="importTableData.length<=0"
          @click="importData"
          style="margin-left:5px"
          type="primary"
        >
          确认导入
          <span v-if="importTableData.length>0">{{importTableData.length}} 条数据</span>
        </Button>
      </div>
    </Drawer>
    <!-- 验证密码 模态框:用于进行一些敏感操作前的身份验证如重置某个商品的密码之前需要验证管理员身份 -->
    <check-password ref="checkPass" @on-success="resetPass" />
  </div>
</template>

<script>
//导入用于和后台交互的api
//根据业务需求修改以下代码
import {
  getGoodsListData,
  getAllGoodsData,
  addGoods,
  deleteGoods,
  dealWithGoods
} from "@/api/goods.js";

// 拓展表格,根据情况使用
// import expandRow from "./expand.vue";
// 验证工具
import { validateMobile, validatePassword } from "@/libs/validate";
// 通过密码验证身份组件
import checkPassword from "@/components/check-password";
// 模版导入文件表数据
import { goodsColumns, goodsData } from "@/libs/importTemplate";
// 指定导出列数据
import { exportColumn } from "./exportColumn";
// excel工具
import excel from "@/libs/excel";
export default {
  name: "GoodsManage",
  components: {
    // expandRow,
    checkPassword
  },
  data() {
    return {
      // 导入excel时预览表格的高度
      height: 510,
      // 主表格的加载状态
      loading: true,
      // 导入excel时按钮的加载状态
      importLoading: false,
      // 导出excel时模态框的加载状态(疑似无用)
      loadingExport: true,
      // 导出excel模态框的可视状态
      exportModalVisible: false,
      // 导入excel模态框的可视状态
      importModalVisible: false,
      // 多条件搜索栏的更多部分的可视状态
      drop: false,
      // 多条件搜索栏的更多部分的按钮文字
      dropDownContent: "展开",
      // 多条件搜索栏的更多部分的按钮图标
      dropDownIcon: "ios-arrow-down",
      // 多选提示栏的选中条目数
      selectCount: 0,
      // 多选选中条目列表
      selectList: [],
      // 多条件搜索栏表单数据
      searchForm: {
        // 搜索框初始化对象
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "createTime", // 默认排序字段
        order: "desc", // 默认排序方式
        type: "0"
      },
      // 添加或编辑模态框
      modalType: 0, // 添加或编辑模态框标识
      modalVisible: false, // 添加或编辑模态框可视状态
      modalTitle: "", // 添加或编辑模态框标题
      form: {
        // 添加或编辑模态框表单对象初始化数据
        // 根据业务需求修改以下代码
        goodsId: "",
        title: "",
        type: "",
        img: "",
        price: "",
        content: "",
        status: "",
        count: ""
      },
      formValidate: {}, // 表单验证规则
      submitLoading: false, // 添加或编辑提交状态
      // 主表格的表头
      // 根据业务需求修改以下代码
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "商品id",
          key: "goodsId",
          minWidth: 120,
          sortable: false
        },
        {
          title: "商品名",
          key: "title",
          minWidth: 120,
          sortable: false
        },
        {
          title: "商品类型",
          key: "type",
          minWidth: 120,
          sortable: false
        },
        {
          title: "商品图片",
          key: "img",
          minWidth: 120,
          sortable: false
        },
        {
          title: "商品单价",
          key: "price",
          minWidth: 120,
          sortable: false
        },
        {
          title: "商品简介",
          key: "content",
          minWidth: 120,
          sortable: false
        },
        {
          title: "商品状态",
          key: "status",
          minWidth: 120,
          sortable: false
        },
        {
          title: "商品库存",
          key: "count",
          minWidth: 120,
          sortable: false
        },
        {
          title: "操作",
          key: "action",
          width: 200,
          align: "center",
          fixed: "right",
          render: (h, params) => {
            let enableOrDisable = "";
            if (params.row.status == "未下架") {
              enableOrDisable = h(
                "Button",
                {
                  props: {
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.dealWith(params.row);
                    }
                  }
                },
                "未下架"
              );
            } else {
              enableOrDisable = h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  }
                },
                "已下架"
              );
            }
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.edit(params.row);
                    }
                  }
                },
                "编辑"
              ),
              enableOrDisable,
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      // 导出列
      exportColumns: exportColumn,
      // 选中的要导出的列
      chooseColumns: [],
      // 导出excel的文件名
      filename: "商品",
      exportTitle: "确认导出",
      exportType: "",
      importTableData: [],
      importColumns: [],
      uploadfile: {
        name: ""
      },
      tempColumns: goodsColumns,
      tempData: goodsData,
      data: [],
      exportData: [],
      total: 0,
      dictSex: this.$store.state.dict.sex
    };
  },
  methods: {
    init() {
      this.getGoodsList();
      // 初始化导出列数据
      let array = [];
      this.exportColumns.forEach(e => {
        // 指定列限制权限
        if (
          !this.getStore("roles").includes("ROLE_ADMIN") &&
          e.key == "mobile"
        ) {
          e.title = "[无权导出] " + e.title;
          e.disabled = true;
        } else {
          e.disabled = false;
        }
        array.push(e.title);
      });
      this.chooseColumns = array;
    },
    handleSelectDepTree(v) {
      this.form.departmentId = v[0];
    },
    handleSelectDep(v) {
      this.searchForm.departmentId = v;
    },
    changePage(v) {
      this.searchForm.pageNumber = v;
      this.getGoodsList();
      this.clearSelectAll();
    },
    changePageSize(v) {
      this.searchForm.pageSize = v;
      this.getGoodsList();
    },
    selectDateRange(v) {
      if (v) {
        this.searchForm.startDate = v[0];
        this.searchForm.endDate = v[1];
      }
    },
    getGoodsList() {
      // 多条件搜索商品列表
      this.loading = true;
      // 避免后台默认值
      if (!this.searchForm.type) {
        this.searchForm.type = "";
      }
      if (!this.searchForm.status) {
        this.searchForm.status = "";
      }
      getGoodsListData(this.searchForm).then(res => {
        console.log(res);
        this.loading = false;
        if (res.success) {
          this.data = res.result.content;
          this.total = res.result.totalElements;
        }
      });
    },
    handleSearch() {
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.getGoodsList();
    },
    handleReset() {
      this.$refs.searchForm.resetFields();
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.selectDate = null;
      this.searchForm.startDate = "";
      this.searchForm.endDate = "";
      this.$refs.dep.clearSelect();
      this.searchForm.departmentId = "";
      // 重新加载数据
      this.getGoodsList();
    },
    changeSort(e) {
      this.searchForm.sort = e.key;
      this.searchForm.order = e.order;
      if (e.order == "normal") {
        this.searchForm.order = "";
      }
      this.getGoodsList();
    },
    getRoleList() {
      getAllRoleList().then(res => {
        if (res.success) {
          this.roleList = res.result;
        }
      });
    },
    handleDropdown(name) {
      if (name == "refresh") {
        this.getGoodsList();
      } else if (name == "reset") {
        if (this.selectCount <= 0) {
          this.$Message.warning("您还未选择要重置密码的商品");
          return;
        }
        this.$refs.checkPass.show();
      } else if (name == "exportData") {
        if (this.selectCount <= 0) {
          this.$Message.warning("您还未选择要导出的数据");
          return;
        }
        this.exportType = "part";
        this.exportModalVisible = true;
        this.exportTitle = "确认导出 " + this.selectCount + " 条数据 ";
      } else if (name == "exportAll") {
        this.exportType = "all";
        this.exportModalVisible = true;
        this.exportTitle = "确认导出全部 " + this.total + " 条数据 ";
        getAllGoodsData().then(res => {
          if (res.success) {
            this.exportData = res.result;
          }
        });
      } else if (name == "importData") {
        this.importModalVisible = true;
      }
    },
    resetPass() {
      this.$Modal.confirm({
        title: "确认重置",
        content:
          "您确认要重置所选的 " +
          this.selectCount +
          " 条商品数据密码为【123456】?",
        loading: true,
        onOk: () => {
          let ids = "";
          this.selectList.forEach(function(e) {
            ids += e.id + ",";
          });
          ids = ids.substring(0, ids.length - 1);
          resetGoodsPass({ ids: ids }).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.clearSelectAll();
              this.getGoodsList();
            }
          });
        }
      });
    },
    exportCustomData() {
      if (this.filename == "") {
        this.filename = "商品 ";
      }
      // 判断勾选导出列
      let array = [];
      this.exportColumns.forEach(e => {
        this.chooseColumns.forEach(c => {
          if (e.title == c && !e.disabled) {
            array.push(e);
          }
        });
      });
      this.exportColumns = array;
      this.exportModalVisible = false;
      let title = [];
      let key = [];
      this.exportColumns.forEach(e => {
        title.push(e.title);
        key.push(e.key);
      });
      const params = {
        title: title,
        key: key,
        data: this.exportData,
        autoWidth: true,
        filename: this.filename
      };
      excel.export_array_to_excel(params);
    },
    beforeUploadImport(file) {
      this.uploadfile = file;
      const fileExt = file.name
        .split(".")
        .pop()
        .toLocaleLowerCase();
      if (fileExt == "xlsx" || fileExt == "xls") {
        this.readFile(file);
        this.file = file;
      } else {
        this.$Notice.warning({
          title: "文件类型错误",
          desc:
            "所选文件‘ " +
            file.name +
            " ’不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。"
        });
      }
      return false;
    },
    // 读取文件
    readFile(file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onerror = e => {
        this.$Message.error("文件读取出错");
      };
      reader.onload = e => {
        this.$Message.success("读取数据成功");
        const data = e.target.result;
        const { header, results } = excel.read(data, "array");
        const tableTitle = header.map(item => {
          return { title: item, key: item };
        });
        this.importTableData = results;
        this.importColumns = tableTitle;
      };
    },
    downloadTemple() {
      let title = [];
      let key = [];
      goodsColumns.forEach(e => {
        title.push(e.title);
        key.push(e.key);
      });
      const params = {
        title: title,
        key: key,
        data: goodsData,
        autoWidth: true,
        filename: "导入商品模板"
      };
      excel.export_array_to_excel(params);
    },
    importData() {
      this.importLoading = true;
      importGoodsData(this.importTableData).then(res => {
        this.importLoading = false;
        if (res.success) {
          this.importModalVisible = false;
          this.getGoodsList();
          this.$Modal.info({
            title: "导入结果",
            content: res.message
          });
        }
      });
    },
    cancelGoods() {
      this.modalVisible = false;
    },
    handleSubmit() {
      this.$refs.form.validate(valid => {
        console.log(valid);
        if (valid) {
          if (this.modalType == 0) {
            // 添加商品  避免编辑后传入id,goodsid,mobile
            delete this.form.id;
            delete this.form.status;
            delete this.form.goodsId;
            delete this.form.mobile;
            this.submitLoading = true;
            addGoods(this.form).then(res => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.getGoodsList();
                this.modalVisible = false;
              }
            });
          } else {
            // 编辑
            this.submitLoading = true;
            editGoods(this.form).then(res => {
              this.submitLoading = false;
              if (res.success) {
                this.$Message.success("操作成功");
                this.getGoodsList();
                this.modalVisible = false;
              }
            });
          }
        }
      });
    },
    handleUpload(v) {
      this.form.avatar = v;
    },
    add() {
      this.modalType = 0;
      this.modalTitle = "添加商品 ";
      this.$refs.form.resetFields();
      this.modalVisible = true;
    },
    edit(v) {
      this.modalType = 1;
      this.modalTitle = "编辑商品 ";
      this.$refs.form.resetFields();
      // 转换null为""
      for (let attr in v) {
        if (v[attr] == null) {
          v[attr] = "";
        }
      }
      let str = JSON.stringify(v);
      let data = JSON.parse(str);
      this.form = data;
      // this.$refs.depTree.setData([data.departmentId], data.departmentTitle);
      let selectRolesId = [];
      this.form.roles.forEach(function(e) {
        selectRolesId.push(e.id);
      });
      this.form.roles = selectRolesId;
      this.modalVisible = true;
    },
    enable(v) {
      this.$Modal.confirm({
        title: "确认启用",
        content: "您确认要启用商品 " + v.goodsname + " ?",
        loading: true,
        onOk: () => {
          enableGoods(v.id).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.getGoodsList();
            }
          });
        }
      });
    },
    disable(v) {
      this.$Modal.confirm({
        title: "确认禁用",
        content: "您确认要禁用商品 " + v.goodsname + " ?",
        loading: true,
        onOk: () => {
          disableGoods(v.id).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.getGoodsList();
            }
          });
        }
      });
    },
    remove(v) {
      this.$Modal.confirm({
        title: "确认删除",
        content: "您确认要删除商品 : " + v.content + " ?",
        loading: true,
        onOk: () => {
          deleteGoods(v.id).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("删除成功");
              this.getGoodsList();
            }
          });
        }
      });
    },
    dropDown() {
      if (this.drop) {
        this.dropDownContent = "展开";
        this.dropDownIcon = "ios-arrow-down";
      } else {
        this.dropDownContent = "收起";
        this.dropDownIcon = "ios-arrow-up";
      }
      this.drop = !this.drop;
    },
    showSelect(e) {
      this.exportData = e;
      this.selectList = e;
      this.selectCount = e.length;
    },
    clearSelectAll() {
      this.$refs.table.selectAll(false);
    },
    delAll() {
      if (this.selectCount <= 0) {
        this.$Message.warning("您还未选择要删除的数据");
        return;
      }
      this.$Modal.confirm({
        title: "确认删除",
        content: "您确认要删除所选的 " + this.selectCount + " 条数据?",
        loading: true,
        onOk: () => {
          let ids = "";
          this.selectList.forEach(function(e) {
            ids += e.id + ",";
          });
          ids = ids.substring(0, ids.length - 1);
          deleteGoods(ids).then(res => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("删除成功");
              this.clearSelectAll();
              this.getGoodsList();
            }
          });
        }
      });
    },
    // 处理商品
    dealWith(v) {
      this.$Modal.confirm({
        title: "确认处理",
        content: "您确认要处理商品 : " + v.content + " ?",
        loading: true,
        onOk: () => {
          dealWithGoods(v.id, { id: v.id }).then(res => {
            console.log(v, v.id, res);
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("处理成功");
              this.getGoodsList();
            }
          });
        }
      });
    }
  },
  mounted() {
    // 计算高度
    this.height = Number(document.documentElement.clientHeight - 230);
    this.init();
    // this.getRoleList();
  }
};
</script>