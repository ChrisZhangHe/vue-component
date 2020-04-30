<template>
  <div>
    FormCase Content
    <h2>{{formMode}}</h2>
    <c-form
      :mode.sync="formMode"
      :items="formItems"
    >
    </c-form>
  </div>
</template>
<script>
export default {
  name: "FormCase",
  data() {
    return {
      formMode: {
        name: ""
      },
      formItems: [
        {
          formItemProp: {
            label: "姓名",
            prop: "name"
          },
          type: "el-input",
          attrs: {
            placeholder: "请输入姓名",
            disabled: false,
            clearable: false,
            "show-password": false
          },
          events: {
            change(val) {
              alert(val);
            }
          }
        },
        {
          formItemProp: {
            label: "蛋糕类型",
            prop: "cakeType"
          },
          type: "el-select",
          attrs: {
            placeholder: "请选择类型"
          },
          events: {},

          components: [
            {
              type: "el-option",
              attrs: {
                placeholder: "请选择类型"
              },
              events: {}
            }
          ]
        }
      ]
    };
  },
  components: {
    CForm: () => import("../components/CForm")
  }
};
</script>