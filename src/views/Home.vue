<template>
  <div class="home">
    <div v-for="image in images" :key="image.id">
      <image-card :image="image" @setIframe="setIframe"/>
    </div>;
    <!-- Uncomment if you want to use modal with iFrame
    <iframe-modal></iframe-modal>
    -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const imageCard = () => import('../components/imageCard.vue');
const iframeModal = () => import('../components/iFrameModal.vue');

export default {
  name: 'home',
  components: {
    imageCard,
    // eslint-disable-next-line
    iframeModal,
  },
  computed: {
    ...mapGetters(['images']),
  },
  methods: {
    setIframe(val) {
      this.$modal.show('iframe-modal', val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/defaults.scss';

.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  @include mqBreakPoint(832px) {
    justify-content: space-evenly;
  }
  @include mqBreakPoint(1218px) {
    justify-content: space-between;
  }
}
</style>
