import { _DeepMergeObj } from "@/utils/index.js";
import { JSXAttribute, ModelChangeEventTags } from "@/utils/config.js";
const IncludeChildTags = {
  "el-select"(h, { _list_, props = {} }) {
    let options = [];
    _list_.forEach(item => {
      let data = {
        props: {
          ...props,
          ...item
        }
      };
      options.push(<el-option {...data}></el-option>);
    });
    return options;
  },
  "el-radio-group"(h, { _list_, props = {} }) {
    let radios = [];
    _list_.forEach(item => {
      let data = {
        props: {
          ...props,
          label: item.label
        }
      };
      radios.push(<el-radio {...data}>{item.text}</el-radio>);
    });
    return radios;
  },
  "el-checkbox-group"(h, { _list_, props = {} }) {
    let checkboxs = [];
    _list_.forEach(item => {
      let data = {
        props: {
          ...props,
          label: item.label
        }
      };
      checkboxs.push(<el-checkbox {...data}>{item.label}</el-checkbox>);
    });
    return checkboxs;
  }
};
function getRenderConf(renderConf) {
  let config = JSON.parse(JSON.stringify(JSXAttribute));
  for (let key in renderConf) {
    if (renderConf.hasOwnProperty(key) && config[key] !== undefined) {
      config[key] = renderConf[key];
    }
  }
  return config;
}
export default {
  name: "CForm",
  props: {
    model: {
      type: Object,
      required: true
    },
    formConf: {
      type: Object,
      required: true
    }
  },
  computed: {
    formModel() {
      return this.model;
    },
    fildes() {
      return this.formConf.fildes;
    }
  },
  methods: {
    // 初始化formModel
    initFormModel() {
      let formModel = JSON.parse(JSON.stringify(this.formModel));
      this.fildes.forEach(({ child: { _model_, props: { value } } }) => {
        formModel[_model_] =
          formModel[_model_] !== undefined ? formModel[_model_] : value;
      });
      this.$emit("update:model", formModel);
    },
    // 更新formModel
    updateFormModel(key, value) {
      let formModel = JSON.parse(JSON.stringify(this.formModel));
      formModel[key] = value;
      this.$emit("update:model", formModel);
    },
    // 获取form参数
    getFormData(h) {
      return _DeepMergeObj(getRenderConf(this.formConf), {});
    },
    // 获取item参数
    getItemData(h) {
      let _ = this;
      return this.fildes.map(item => {
        let itemData = _DeepMergeObj(getRenderConf(item), {});
        if (item._layout_ && item._layout_.row) {
        } else if (item._layout_ && item._layout_.col) {
          let colData = { props: { ...item._layout_.col } };
          return (
            <el-col {...colData}>
              <el-form-item {...itemData}>
                {this.getTagComponent(h, item.child)}
              </el-form-item>
            </el-col>
          );
        } else {
          return (
            <el-form-item {...itemData}>
              {this.getTagComponent(h, item.child)}
            </el-form-item>
          );
        }
      });
    },
    // 获取item内组件
    getTagComponent(h, tagConfig) {
      let slots = [];
      let { _tag_, option } = tagConfig;
      if (IncludeChildTags[_tag_]) {
        slots.push(...IncludeChildTags[_tag_](h, option));
      }
      for (let key in tagConfig.slots) {
        slots.push(<div slot={key}>{tagConfig.slots[key](h, tagConfig)}</div>);
      }
      return h(tagConfig._tag_, this.getTagData(tagConfig), slots);
    },
    // 获取tag组件参数
    getTagData(tagConfig) {
      const _ = this;
      let modelVal = this.formModel[tagConfig._model_];
      if (typeof modelVal === "object") {
        // modelVal = JSON.parse(JSON.stringify(modelVal));
      }
      let defaultModelEvent = {};
      if (ModelChangeEventTags.includes(tagConfig._tag_)) {
        defaultModelEvent = {
          change(value) {
            _.updateFormModel(tagConfig._model_, value);
          }
        };
      } else {
        defaultModelEvent = {
          input(value) {
            debugger
            _.updateFormModel(tagConfig._model_, value);
          }
        };
      }
      return _DeepMergeObj(getRenderConf(tagConfig), {
        props: { value: modelVal },
        on: {
          ...defaultModelEvent
        }
      });
    }
  },
  render(h) {
    return <el-form {...this.getFormData(h)}>{...this.getItemData(h)}</el-form>;
  },
  updated() {},
  created() {
    this.initFormModel();
  }
};
