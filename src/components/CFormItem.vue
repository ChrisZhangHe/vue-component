<template>
  <div>
    <el-form-item v-bind="item.formItemProp">
      <component
        :is="item.type"
        v-model="value"
        v-bind="item.attrs"
        v-on="item.events"
      >
      <template v-if="item.components">
          <div>
              
          </div>
      </template>
      </component>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: "CFormItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value: null
    };
  },
  watch: {
    value(val) {
      this.$emit("input", val);
    }
  }
};
</script>