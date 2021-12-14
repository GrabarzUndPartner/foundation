<template>
  <base-slider class="pagination-slider" v-bind="sliderData" :settings="settings">
    <template #prev="arrowOption">
      <span class="custom-arrow arrow-slider-arrow prev" :data-options="JSON.stringify(arrowOption)">prev</span>
    </template>
    <template #next="arrowOption">
      <span class="custom-arrow arrow-slider-arrow next" :data-options="JSON.stringify(arrowOption)">next</span>
    </template>
    <template #pagination="page">
      <i class="custom-dot" :data-page="JSON.stringify(page)" />
    </template>

    <template #default="{slide}">
      <base-slide v-bind="slide" />
    </template>
  </base-slider>
</template>

<script>
import BaseSlider from '../../index';
import BaseSlide from '../../slide';

export default {
  components: {
    BaseSlider,
    BaseSlide
  },
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
      settings: {
        dots: true,
        arrows: true
      }
    };
  }
};
</script>

<style lang="postcss" scoped>
.pagination-slider {
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
