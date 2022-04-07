<template>
  <sidebarComp @pageChangeFunc="pageChangeFunc" />
  <about v-if="pageValue == 'about'" />
  <about v-if="pageValue == 'jobs'" />
</template>

<script>
import sidebarComp from "./sidebar.vue";
import about from "./pages/about.vue";
export default {
  components: {
    sidebarComp,
    about,
  },
  data() {
    return {
      pageValue: null,
    };
  },
  methods: {
    pageChangeFunc: function (value) {
      this.pageValue = value;
    },
  },
  created() {
    this.$store.state.text = null;
  },
};
</script>