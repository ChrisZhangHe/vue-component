const IncludeChildTags = {
  "el-select"(h, { _list_, attributes }) {
    let options = [];
    _list_.forEach(item => {
      let data = {
        props: {
          ...attributes,
          ...item
        }
      };
      options.push(<el-option {...data}></el-option>);
    });
    return options;
  }
};
export default {
  name: "CForm",
  props: {
    fildes: {
      type: Array,
      required: true
    },
    formProp: {
      type: Object
    }
  },
  data() {
    return {};
  },
  watch: {},
  methods: {
    // 初始化formModel
    initFormModel() {
      let model = JSON.parse(JSON.stringify(this.formProp.model));
      this.fildes.forEach(({ child: { _model_, attributes: { value } } }) => {
        model[_model_] = model[_model_] !== undefined ? model[_model_] : value;
      });
      this.$emit("update:model", model);
    },
    // 更新formModel
    updateFormModel(key, value) {
      let model = JSON.parse(JSON.stringify(this.formProp.model));
      model[key] = value;
      this.$emit("update:model", model);
    },
    // 获取form参数
    getFormData(h) {
      return {
        props: this.formProp,
        on: {
          ...this.$listeners
        }
      };
    },
    // 获取item参数
    getItemData(h) {
      let _ = this;
      return this.fildes.map(item => {
        let itemData = {
          props: { ...item.attributes }
          // slots
        };
        if (item._layout_ && item._layout_.row) {
        } else if (item._layout_ && item._layout_.col) {
          let colData = {
            props: item._layout_.col
          };
          return (
            // <el-form-item {...itemData}>
            //   <el-col {...colData}>
            //     {this.getTagComponent(h, item.child)}
            //   </el-col>
            // </el-form-item>
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
    // 获取item内组件参数
    getTagData({ _model_, attributes, events,style }) {
      const _ = this;
      let modelVal = this.formProp.model[_model_];
      return {
        props: { ...attributes, value: modelVal },
        on: {
          ...events,
          input(value) {
            _.updateFormModel(_model_, value);
          }
        },
        style:style
      };
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
