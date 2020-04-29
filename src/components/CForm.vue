<template>
  <div>
    <el-form>
      <c-form-item
        v-for="(item,index) in items"
        :key="item.type+index"
        :item="item"
        v-model="mode[item.formItemProp.prop]"
      >
      </c-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "CForm",
  components: {
    CFormItem: () => import("./CFormItem")
  },
  props: {
    mode: {
      type: Object,
      required: true
    },
    // {type:'',propertys:{}} type is elementUI form-item type
    items: {
      type: Array,
      required: true
    }
  },
  watch: {
    mode(val) {
      this.$emit("update:mode", val);
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>