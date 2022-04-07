<template>
  <div id="page">
    <editor :defValue="content" @saveFunc="saveFunc" />
  </div>
</template>

<script>
import editor from "../comp/editor.vue";
export default {
  components: {
    editor,
  },
  data() {
    return {
      content: null,
    };
  },
  methods: {
    saveFunc: function (text) {
      this.content = text;
    },
  },
};
</script>