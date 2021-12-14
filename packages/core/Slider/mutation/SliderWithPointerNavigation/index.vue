<template>
  <base-slider
    ref="myswiper"
    class="arrow-slider"
    v-bind="sliderData"
    :settings="settings"
    :class="arrowDirectionClass"
    @afterChange="onAfterChange"
  >
    <template #default="{slide}">
      <base-slide v-bind="slide" />
    </template>
  </base-slider>
</template>

<script>
import BaseSlider from '../../index';
import BaseSlide from '../../slide/';
import PointerNavigation from '../../../mixins/PointerNavigation.vue';

export default {
  components: {
    BaseSlider,
    BaseSlide
  },
  mixins: [PointerNavigation],

  props: {
    sliderData: {
      type: Object,
      default () {
        return {
          slides: []
        };
      }
    }
  },
  data () {
    return {
      arrowDirection: 0,
      activeSlideIndex: 0,
      settings: {
        dots: false,
        arrows: false
      }
    };
  },
  computed: {
    arrowDirectionClass () {
      return {
        'js-arrow-direction-left': this.arrowDirection === -1 && this.activeSlideIndex > 0,
        'js-arrow-direction-right': this.arrowDirection === 1 && this.activeSlideIndex < this.sliderData.slides.length - 1
      };
    }
  },
  mounted () {
    this.initSwiperCursors(this.$refs.myswiper, [
      'a',
      '.swiper-pagination',
      '.swiper-pagination-bullet',
      '.story--buttons',
      '.atom-base-button'
    ]);
  },
  methods: {
    onAfterChange (index) {
      this.activeSlideIndex = index;
    }
  }
};
</script>

<style lang="postcss" scoped>
.arrow-slider {
  background: red;

  &.js-arrow-direction-left {
    cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMA/Pn14e7oXExCLSIbNuXYaVdRRxYIO9vOxcO4q5R4cG9jKA95lSj3AAAAyklEQVQ4y6XVSQ6DMBBEUQyEeYaQefb9zxgUIcW9+VjqWr8Fxu3qgPJo0sA3T2tN72k7u8QMXvZlfwkzD5sau+px0/aLXRPlG3Yw9p+YbRZaJze0o7BXtHnk2sue7CzsGW0t7PGDdufadiJbCBtXaBPXJiXZt7C7gmzZuDaq0cauDXOylbAmQ3uwblKyUytsF1BOwt4DHebP8D+ggQPCr1NcCl23bpB4RFXDz88KM8ODVVQBlIyyvrgY9ZXLZc5rQrmAeLXplyav4y8J1UXpfZPbJQAAAABJRU5ErkJggg==") 22 22, auto;
  }

  &.js-arrow-direction-right {
    cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMA/Pn14e7oXExCLSIbNuXYaVdRRxYIO9vOxcO4q5R4cG9jKA95lSj3AAAAx0lEQVQ4y6XVRw7DMAwEQMtN7j1O7/z/GxMECUJeuAK45znYErWMRHx3jUIzOqJboJ0cvTME2SKmT+4Bdv5ach7aMqFf3IhwSv+4CeAzscQF0CehZx1vjlwnJdAHoVddP3dCt7peeq4zoJtU6ErXdc51DnSVCf3QdZtw3dVgSGKuU6ALJ3Sja088W6AHoftF1xeh9wZs+Azv8A/io8OXYr1uPEh4RI3Dj58VfrCroQpAydjqCxcjrlxrmeM1gReQZbXZlyZexy/RMUXptwZoqwAAAABJRU5ErkJggg==") 22 22, auto;
  }

  & .slick-dots {
    & li {
      & .custom-dot {
        display: block;
        width: 10px;
        height: 10px;
        background: purple;
      }

      &.slick-active {
        & .custom-dot {
          background: blue;
        }
      }
    }
  }

  & .custom-arrow {
    position: absolute;
    top: 50%;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    color: white;
    cursor: pointer;
    background: black;
    border-radius: 50%;
    transform: translateY(-50%);

    &.slick-disabled {
      opacity: 0.2;
    }

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }

}
</style>
