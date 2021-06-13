<template>
  <div class="pagination-ctrl">
    <div class="pagination-ctrl__ctrl pagination-ctrl__ctrl--prev"
    :class="{ 'disabled' : page === 1 }"
    @click="prevPage">Previous</div>;
    <div class="pagination-ctrl__ctrl pagination-ctrl__ctrl--next"
    :class="{ 'disabled' : pageMax }"
    @click="next">Next</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'pagination-control',
  computed: {
    ...mapGetters(['page', 'pageMax']),
  },
  methods: {
    ...mapMutations(['nextPage', 'prevPage']),
    next() {
      if (!this.pageMax) {
        this.nextPage();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/defaults.scss';

.pagination-ctrl {
  display: flex;
  width: 100%;
   justify-content: space-between;
  margin-top:30px;

  &__ctrl {
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 500;
    min-width: 130px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s linear;
    &--prev {
      background: $accent;
      color:white;
      &:hover {
        background: darken($accent, 10);
      }
      &.disabled {
        background: $disabled;
      }
    }
    &--next {
      background: $primary;
      color:white;
      &:hover {
        background: darken($primary, 10);
      }
      &.disabled {
        background: $disabled;
      }
    }
  }
}
</style>
