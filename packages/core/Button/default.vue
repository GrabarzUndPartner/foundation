<template>
  <button-base class="design-default" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import ButtonBase from './';

export default {
  components: {
    ButtonBase
  },

  inheritAttrs: false
};
</script>

<style lang="postcss" scoped>
.design-default {
  position: relative;

  &.loading {
    pointer-events: none;

    & >>> * {
      opacity: 0;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      box-sizing: border-box;
      width: 1em;
      height: 1em;
      content: "";
      border: 0.2em solid rgb(0 0 0 / 100%);
      border-top-color: rgb(0 0 0 / 30%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transform-origin: 50% 50%;
      animation: spin 0.5s infinite linear;
    }
  }
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
