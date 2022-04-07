<template>
  <div class="buttonBlock"><q-btn @click="saveEvent">Kaydet</q-btn></div>
  <QuillEditor
    v-model:content="content"
    ref="quill"
    theme="snow"
    toolbar="full"
  />
  <div class="buttonBlock"><q-btn @click="saveEvent">Kaydet</q-btn></div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  props: ["defValue"],
  emits: ["saveFunc"],
  components: { QuillEditor },
  data() {
    return {
      content: null,
    };
  },
  methods: {
    saveEvent: function () {
      this.$emit("saveFunc", this.$refs.quill.getContents());
    },
  },
  mounted() {
    this.$refs.quill.setContents(this.defValue);
  },
};
</script>
<style scoped>
.buttonBlock {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
}
</style>