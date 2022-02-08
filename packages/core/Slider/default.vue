<template>
  <base-slider class="design-default" v-bind="$attrs" v-on="$listeners">
    <template #default>
      <slot>
        <default-slide>Default Slide 1</default-slide>
        <default-slide>Default Slide 2</default-slide>
        <default-slide>Default Slide 3</default-slide>
      </slot>
    </template>

    <template #afterList="{go, hasNext, hasPrev}">
      <base-button class="navigation" :disabled="!hasPrev" :aria-label="ariaLabel.prev" :aria-controls="`Slider${_uid}-track`" @click="go('<')">
        Prev
      </base-button>
      <base-button class="navigation prev" :disabled="!hasNext" :aria-label="ariaLabel.next" :aria-controls="`Slider${_uid}-track`" @click="go('>')">
        Next
      </base-button>
    </template>

    <template #afterTrack="{length, index:currentIndex, go, hasNext, hasPrev}">
      <div class="pagination">
        <base-button :disabled="!hasPrev" :aria-label="ariaLabel.prev" :aria-controls="`Slider${_uid}-track`" @click="go('<')">
          Prev
        </base-button>
        <ul>
          <li v-for="index in length" :key="index">
            <base-button :disabled="(index-1) === currentIndex" :aria-label="`${ariaLabel.slide}${(index-1)}`" :aria-controls="`Slider${_uid}-slide${(index-1)}`" @click="go((index-1))">
              {{ index }}
            </base-button>
          </li>
        </ul>
        <span>{{ currentIndex + 1 }} / {{ length }}</span>
        <base-button :disabled="!hasNext" :aria-label="ariaLabel.next" :aria-controls="`Slider${_uid}-track`" @click="go('>')">
          Next
        </base-button>
      </div>
    </template>
  </base-slider>
</template>

<script>

import BaseButton from '../Button/default';
import DefaultSlide from './Slide/default';
import BaseSlider from './index';

export default {
  components: {
    BaseSlider,
    BaseButton,
    DefaultSlide
  },
  inheritAttrs: false,
  data () {
    return {
      splideId: null,
      ariaLabel: {
        prev: 'Go to prev slide',
        next: 'Go to next slide',
        slide: 'Go to slide '
      },
      arialControls: {
        prev: 'Go to prev slide',
        next: 'Go to next slide',
        slide: 'Go to slide '
      }
    };
  }
};

</script>

<style lang="postcss" scoped>
.design-default {
  position: relative;
  font-family: monospace;

  & .navigation {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    &.prev {
      right: 0;
      left: auto;
    }

  }

  & .pagination {
    display: flex;
    justify-content: center;

    & ul {
      display: none;
      padding: 0;
      margin: 0;
      list-style: none;

      & li + li {
        margin-left: 8px;
      }
    }

    & ul,
    & span {
      margin: 0 8px;
    }

    @media (min-width: 768px) {
      & ul {
        display: flex;
      }

      & span {
        display: none;
      }
    }
  }

}

</style>
