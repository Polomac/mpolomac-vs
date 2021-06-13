<template>
  <div class="image-container" @click="showImage">
    <h3 class="image-container__title">Author: {{image.author}}</h3>
    <img class="image-container__img " :src="`https://picsum.photos/id/${image.id}/367/267`">
    <p>Image id: {{image.id}}</p>
  </div>
</template>

<script>
export default {
  name: 'image-card',
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showImage() {
      // Comment out if you want to use modal with iFrame
      window.open(this.image.url, '_blank');
      /* Uncomment if you want to use modal with iFrame
      this.$emit('setIframe', this.image.url);
      */
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/defaults.scss';

.image-container {
  padding: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  border-radius: 4px;
  cursor: pointer;

  @include mqBreakPoint(832px) {
    margin-bottom: 50px;
  }

  &__title {
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__img {
    max-width: 100%;
  }
}
</style>
