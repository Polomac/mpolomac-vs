<template>
  <div id="app">
    <h1>Polomac VS-Test</h1>
    <h2 v-if="!pageMax">Page {{page}}</h2>
    <h2 v-if="pageMax && images">You've reached the last page</h2>
    <pagination-ctrl :page="page"></pagination-ctrl>
    <items-per-page></items-per-page>
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

const paginationCtrl = () => import('./components/paginationControls.vue');
const itemsPerPage = () => import('./components/itemsPerPage.vue');

export default {
  components: {
    paginationCtrl,
    itemsPerPage,
  },
  methods: {
    ...mapActions(['getImages']),
  },
  computed: {
    ...mapGetters(['page', 'perPage', 'pageMax']),
  },
  created() {
    this.getImages({
      page: this.page,
      perPage: this.perPage,
    });
  },
  watch: {
    page: {
      handler() {
        this.getImages({
          page: this.page,
          perPage: this.perPage,
        });
      },
    },
    perPage: {
      handler() {
        this.getImages({
          page: this.page,
          perPage: this.perPage,
        });
      },
    },
  },
};
</script>
<style lang="scss">
@import '../src/assets/styles/defaults';

#app {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
}
</style>
