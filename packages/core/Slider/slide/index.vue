<template>
  <div class="slider-slide">
    <slot name="text">
      <p v-if="copy" v-html="copy" />
    </slot>
  </div>
</template>

<script>
export default {
  components: {
    // BasePicture
  },
  props: {
    picture: {
      type: Object,
      default () {
        return null;
      }
    },
    copy: {
      type: String,
      default () {
        return null;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
  .slider-slide {
    position: relative;
    pointer-events: none;

    &::before {
      display: block;
      padding-top: calc(100% * (9 / 16));
      content: "";
    }

    & p {
      position: absolute;
      bottom: 0;
      left: 0;
      box-sizing: border-box;
      width: 100%;
      padding: 1em 2em;
      margin: 0;
      font-family: Arial, sans-serif;
      font-size: 20px;
      color: white;
      background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 100%) 100%);
    }
  }
</style>
