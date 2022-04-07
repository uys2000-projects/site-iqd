<template>
  <div class="sidebar">
    <q-btn @click="pageChangeEvent('about')">Biz Kimiz?</q-btn>
    <q-btn @click="pageChangeEvent('jobs')">Çalışmalarımız</q-btn>
    <q-btn @click="pageChangeEvent('events')">Etkinliklerimiz</q-btn>
    <q-btn @click="pageChangeEvent('sups')">Destekçiiler</q-btn>
    <q-btn @click="pageChangeEvent('connect')">Bize Ulaşın</q-btn>
    <q-btn @click="pageChangeEvent('color')">Renkler</q-btn>
    <q-btn @click="pageChangeEvent('exit')">Çıkış</q-btn>
  </div>
</template>

<script>
export default {
  emits: ["pageChangeFunc"],
  methods: {
    pageChangeEvent: function (value) {
      this.$emit("pageChangeFunc", value);
    },
  },
};
</script>
<style scoped>
.sidebar {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
.sidebar > .q-btn {
  margin: auto;
  width: 200px;
}
</style>
<style>
.ql-editor{
  min-height: 200px;
}
</style>