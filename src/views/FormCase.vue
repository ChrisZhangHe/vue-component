<template>
  <div>
    <h1>form-model:{{formConf.formProp.model}}</h1>
    <c-form
      v-bind:model.sync="formConf.formProp.model"
      v-bind:formProp="formConf.formProp"
      v-bind:fildes="formConf.fildes"
      v-on="formConf.formEvents"
    ></c-form>
  </div>
</template>
<script>
export default {
  name: "FormCase",
  components: {
    CForm: () => import("@/components/Form/CForm.js")
  },
  data() {
    return {
      formConf: {
        formProp: {
          model: {}, //必要参数
          "label-width": "100px"
          // inline: true
        },
        formEvents: {
          validate(propVal) {
            this.$message("propVal:" + propVal);
          }
        },
        fildes: [
          {
            _layout_: {
              // row:{

              // },
              col: {
                span: 12
              }
            },
            attributes: {
              label: "年龄",
              prop: "age" //必要参数
            },
            // slots: {
            //   label(h) {}
            // },
            child: {
              _tag_: "el-input",
              _model_: "age",
              attributes: {
                value: "10岁",
                clearable: true
              },
              slots: {
                prepend(h, data) {
                  return <div> 44444</div>;
                }
              },
              events: {
                // change(val) {
                //   alert("el-input-change:" + val);
                // }
              }
            }
          },
        //   {
        //     _layout_: {
        //       // row:{

        //       // },
        //       col: {
        //         span: 12
        //       }
        //     },
        //     attributes: {
        //       label: "类型"
        //       //   prop: "type" //必要参数
        //     },
        //     // slots: {
        //     //   label(h) {}
        //     // },
        //     child: {
        //       _tag_: "el-select",
        //       _model_: "type",
        //       attributes: {
        //         value: "选项2",
        //         disabled: false,
        //         multiple: true
        //       },
        //       style: "background:red;",
        //       slots: {},
        //       events: {},
        //       option: {
        //         _list_: [
        //           {
        //             value: "选项1",
        //             label: "黄金糕",
        //             disabled: true
        //           },
        //           {
        //             value: "选项2",
        //             label: "双皮奶"
        //           },
        //           {
        //             value: "选项3",
        //             label: "油条"
        //           }
        //         ],
        //         attributes: {
        //           //   label
        //         }
        //       }
        //     }
        //   }
        ]
      }
    };
  }
};
</script>