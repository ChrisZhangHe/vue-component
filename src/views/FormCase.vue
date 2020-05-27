<template>
  <div>
    <h1>form-model:{{formConf.props.model}}</h1>
    <el-checkbox-group v-model="checkedCities">
      <el-checkbox
        v-for="city in cities"
        :label="city"
        :key="city"
      >{{city}}</el-checkbox>
    </el-checkbox-group>
    <c-form
      v-bind:model.sync="formConf.props.model"
      v-bind:formConf="formConf"
      v-on="formConf.on"
    ></c-form>
  </div>
</template>
<script>
export default {
  name: "FormCase",
  components: {
    CForm: () => import("@/components/Form/CForm.js")
  },
  methods: {},
  data() {
    return {
      checkedCities: ["上海", "北京"],
      cities: ["上海", "北京", "广州", "深圳"],
      formConf: {
        props: {
          model: { checkboxGroupVal: ["上海"] }, //必要参数
          "label-width": "100px"
          // inline: true
        },
        on: {
          validate(propVal) {
            this.$message("propVal:" + propVal);
          }
        },
        fildes: [
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 12
          //     }
          //   },
          //   props: {
          //     label: "年龄",
          //     prop: "age" //必要参数
          //   },
          //   // slots: {
          //   //   label(h) {}
          //   // },
          //   child: {
          //     _tag_: "el-input",
          //     _model_: "age",
          //     props: {
          //       value: "10岁",
          //       clearable: true
          //     },
          //     slots: {
          //       prepend(h, data) {
          //         return <div> 44444</div>;
          //       }
          //     },
          //     on: {
          //       change(val) {
          //         alert("el-input-change:" + val);
          //       }
          //     }
          //   }
          // },
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 12
          //     }
          //   },
          //   props: {
          //     label: "计数器"
          //   },
          //   child: {
          //     _tag_: "el-input-number",
          //     _model_: "numCount",
          //     props: {
          //       value: 2,
          //       min: 2,
          //       max: 5
          //     }
          //   },
          //   on: {
          //     change(currentValue, oldValue) {
          //       debugger;
          //       console.log(value);
          //     },
          //     blur() {
          //       debugger;
          //     }
          //   }
          // },
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 12
          //     }
          //   },
          //   props: {
          //     label: "年龄",
          //     prop: "age1" //必要参数
          //   },
          //   // slots: {
          //   //   label(h) {}
          //   // },
          //   child: {
          //     _tag_: "el-input",
          //     _model_: "age1",
          //     props: {
          //       value: "10岁",
          //       clearable: true
          //     },
          //     slots: {
          //       prepend(h, data) {
          //         return <div> 44444</div>;
          //       }
          //     },
          //     on: {
          //       change(val) {
          //         alert("el-input-change:" + val);
          //       }
          //     }
          //   }
          // },
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 12
          //     }
          //   },
          //   props: {
          //     label: "类型"
          //     //   prop: "type" //必要参数
          //   },
          //   // slots: {
          //   //   label(h) {}
          //   // },
          //   child: {
          //     _tag_: "el-select",
          //     _model_: "type",
          //     props: {
          //       value: ["选项2"],
          //       // disabled: false,
          //       multiple: true
          //     },
          //     style: "background:red;",
          //     slots: {},
          //     on: {},
          //     option: {
          //       _list_: [
          //         {
          //           value: "选项1",
          //           label: "黄金糕",
          //           disabled: true
          //         },
          //         {
          //           value: "选项2",
          //           label: "双皮奶"
          //         },
          //         {
          //           value: "选项3",
          //           label: "油条"
          //         }
          //       ],
          //       props: {
          //         //   label
          //       }
          //     }
          //   }
          // },
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 12
          //     }
          //   },
          //   props: {
          //     label: "开关"
          //     //   prop: "type" //必要参数
          //   },
          //   child: {
          //     _tag_: "el-switch",
          //     _model_: "switch",
          //     props: {
          //       "active-color": "#13ce66",
          //       "inactive-color": "#ff4949",
          //       "active-text": "按月付费",
          //       "inactive-text": "按年付费"
          //     }
          //   }
          // },
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 12
          //     }
          //   },
          //   props: {
          //     label: "单选框组"
          //     //   prop: "type" //必要参数
          //   },
          //   child: {
          //     _tag_: "el-radio-group",
          //     _model_: "radioGroup",
          //     props: {
          //       value:'2'
          //     },
          //     option: {
          //       _list_: [
          //         {
          //           label: "1",
          //           text: "备选项1"
          //         },
          //         {
          //           label: "2",
          //           text: "备选项2"
          //         },
          //         {
          //           label: "3",
          //           text: "备选项3"
          //         }
          //       ]
          //     }
          //   }
          // },
          {
            _layout_: {
              // row:{

              // },
              col: {
                span: 12
              }
            },
            props: {
              label: "多选框组"
            },
            child: {
              _tag_: "el-checkbox-group",
              _model_: "checkboxGroupVal",
              props: {
                value: ["上海"]
              },
              on: {
                change(value) {
                  debugger;
                  // _.updateFormModel(tagConfig._model_, value);
                }
              },
              option: {
                _list_: [
                  {
                    label: "上海"
                  },
                  {
                    label: "北京"
                  }
                ],
                props: {
                  name: "checkboxGroup"
                }
              }
            }
          }
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 12
          //     }
          //   },
          //   props: {
          //     label: "级联选择器"
          //     //   prop: "type" //必要参数
          //   },
          //   child: {
          //     _tag_: "el-cascader",
          //     _model_: "cascader",
          //     props: {
          //       props: { multiple: true },
          //       options: [
          //         {
          //           value: 1,
          //           label: "东南",
          //           children: [
          //             {
          //               value: 2,
          //               label: "上海",
          //               children: [
          //                 { value: 3, label: "普陀" },
          //                 { value: 4, label: "黄埔" },
          //                 { value: 5, label: "徐汇" }
          //               ]
          //             },
          //             {
          //               value: 7,
          //               label: "江苏",
          //               children: [
          //                 { value: 8, label: "南京" },
          //                 { value: 9, label: "苏州" },
          //                 { value: 10, label: "无锡" }
          //               ]
          //             },
          //             {
          //               value: 12,
          //               label: "浙江",
          //               children: [
          //                 { value: 13, label: "杭州" },
          //                 { value: 14, label: "宁波" },
          //                 { value: 15, label: "嘉兴" }
          //               ]
          //             }
          //           ]
          //         },
          //         {
          //           value: 17,
          //           label: "西北",
          //           children: [
          //             {
          //               value: 18,
          //               label: "陕西",
          //               children: [
          //                 { value: 19, label: "西安" },
          //                 { value: 20, label: "延安" }
          //               ]
          //             },
          //             {
          //               value: 21,
          //               label: "新疆维吾尔族自治区",
          //               children: [
          //                 { value: 22, label: "乌鲁木齐" },
          //                 { value: 23, label: "克拉玛依" }
          //               ]
          //             }
          //           ]
          //         }
          //       ]
          //       // value:['2']
          //     }
          //   }
          // },
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 24
          //     }
          //   },
          //   props: {
          //     label: "滑块"
          //     //   prop: "type" //必要参数
          //   },
          //   child: {
          //     _tag_: "el-slider",
          //     _model_: "slider",
          //     props: {
          //       step: 10,
          //       "show-stops": true
          //     }
          //   }
          // },
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 24
          //     }
          //   },
          //   props: {
          //     label: "时间选择器"
          //     //   prop: "type" //必要参数
          //   },
          //   child: {
          //     _tag_: "el-time-select",
          //     _model_: "timeSelect",
          //     props: {
          //       placeholder: "起始时间",
          //       "picker-options": {
          //         start: "08:30",
          //         step: "00:15",
          //         end: "18:30"
          //       }
          //     }
          //   }
          // },
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 24
          //     }
          //   },
          //   props: {
          //     label: "日期选择器"
          //     //   prop: "type" //必要参数
          //   },
          //   child: {
          //     _tag_: "el-date-picker",
          //     _model_: "dateSelect",
          //     props: {
          //       type: "date",
          //       placeholder: "选择日期"
          //     }
          //   }
          // },
          // {
          //   _layout_: {
          //     // row:{

          //     // },
          //     col: {
          //       span: 24
          //     }
          //   },
          //   props: {
          //     label: "附件上传"
          //     //   prop: "type" //必要参数
          //   },
          //   child: {
          //     _tag_: "el-upload",
          //     _model_: "upload",
          //     props: {
          //       action: "https://jsonplaceholder.typicode.com/posts/",
          //       "file-list": [
          //         {
          //           name: "food.jpeg",
          //           url:
          //             "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          //         },
          //         {
          //           name: "food2.jpeg",
          //           url:
          //             "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          //         }
          //       ]
          //     },
          //     slots: {
          //       default(h) {
          //         return (
          //           <div>
          //             <el-button size="small" type="primary">
          //               点击上传
          //             </el-button>
          //             <div slot="tip" class="el-upload__tip">
          //               只能上传jpg/png文件，且不超过500kb
          //             </div>
          //           </div>
          //         );
          //       }
          //     }
          //   }
          // }
        ]
      }
    };
  },
  methods: {
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  },
  mounted() {}
};
</script>