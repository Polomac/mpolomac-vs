<template>
  <div class="items-per-page">
    <h3 class="items-per-page__title">Items per page:</h3>
    <div class="items-per-page__ind"
    :class="{ 'active' : perPage === 10 }"
    @click="imageNum(10)">10</div>
    <div class="items-per-page__ind"
    :class="{ 'active' : perPage === 30 }"
    @click="imageNum(30)">30</div>
    <div class="items-per-page__ind"
    :class="{ 'active' : perPage === 50 }"
    @click="imageNum(50)">50</div>
    <div class="items-per-page__ind"
    :class="{ 'active' : perPage === 100 }"
    @click="imageNum(100)">100</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'items-per-page',
  computed: {
    ...mapGetters(['perPage', 'pageMax']),
  },
  methods: {
    ...mapMutations(['setPerPage', 'setPageToOne']),
    imageNum(num) {
      this.setPageToOne();
      this.setPerPage(num);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/defaults.scss';

.items-per-page {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  align-items: center;

  &__ind {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 50px;
    background: $disabled;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    padding: 0;
    &.active {
      background: $primary;
    }
  }
}
</style>
