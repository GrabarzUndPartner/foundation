<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  methods: {
    enter (element) {
      element.style.height = 'auto';
      const height = getComputedStyle(element).height;
      element.style.height = 0;
      element.style.opacity = 0;

      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },

    afterEnter (element) {
      element.style.height = 'auto';
      element.style.opacity = 1;
    },

    beforeLeave (element) {
      element.style.height = 'auto';
      element.style.opacity = 0;
    },

    leave (element) {
      element.style.height = getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
* {
  will-change: height opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

:not(.expand-enter-active) {
  transition-timing-function: ease-in-out;
  transition-duration: 0.35s;
  transition-property: opacity;
}

.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
  transition-timing-function: ease-in-out;
  transition-duration: 0.35s;
  transition-property: height;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
