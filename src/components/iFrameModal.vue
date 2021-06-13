<template>
  <modal name="iframe-modal" @before-open="beforeOpen" :scroll="true">
    <h3 v-if="src">Src url: {{src}}</h3>
    <iframe class="iframe"
      v-if="src"
      title="Inline Frame Example"
      scrolling="no"
      :src="src">
    </iframe>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      src: null,
    };
  },
  methods: {
    beforeOpen(event) {
      this.src = event.params;
    },
  },
};
</script>

<style lang="scss">
.vm--modal {
    height: 100vh !important;
    width: calc(100% - 60px) !important;
    top: 50px !important;
    left: 30px !important;
    padding: 10px;
    overflow-y: scroll;
}

.iframe{
    position: absolute;
    width: calc(100% - 20px);
    height: 100%;
  }
</style>
