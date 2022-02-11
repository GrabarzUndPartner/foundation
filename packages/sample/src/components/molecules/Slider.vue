
<template>
  <base-slider class="molecule-slider" :options="{autoHeight: true, type: 'loop'}">
    <template #default="{splideId}">
      <image-slide :index="0" :splide-id="splideId" />
      <text-slide :index="1" :splide-id="splideId" />
      <image-slide :index="2" :splide-id="splideId" />
      <text-slide :index="3" :splide-id="splideId" />
    </template>

    <template #afterList="{splideId, go, hasNext, hasPrev}">
      <base-button class="navigation prev" :disabled="!hasPrev" :aria-label="ariaLabel.prev" :aria-controls="`${splideId}-track`" @click="go('<')">
        <atom-icon icon="chevronLeft" />
      </base-button>
      <base-button class="navigation next" :disabled="!hasNext" :aria-label="ariaLabel.next" :aria-controls="`${splideId}-track`" @click="go('>')">
        <atom-icon icon="chevronRight" />
      </base-button>
    </template>

    <template #afterTrack="{splideId, length, index:currentIndex, go, hasNext, hasPrev}">
      <div class="pagination">
        <ul>
          <li v-for="index in length" :key="index">
            <base-button :disabled="(index-1) === currentIndex" :aria-label="`${ariaLabel.slide}${(index-1)}`" :aria-controls="`${splideId}-slide${(index-1)}`" @click="go((index-1))">
              <i />
            </base-button>
          </li>
        </ul>
        <div>
          <base-button class="prev" :disabled="!hasPrev" :aria-label="ariaLabel.prev" :aria-controls="`${splideId}-track`" @click="go('<')">
            <atom-icon icon="chevronLeft" />
          </base-button>
          <span>{{ currentIndex + 1 }} / {{ length }}</span>
          <base-button class="next" :disabled="!hasNext" :aria-label="ariaLabel.next" :aria-controls="`${splideId}-track`" @click="go('>')">
            <atom-icon icon="chevronRight" />
          </base-button>
        </div>
      </div>
    </template>
  </base-slider>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import BaseSlider from '@foundation/core/Slider';
import BaseButton from '@foundation/core/Button';
import ImageSlide from './slider/ImageSlide';
import TextSlide from './slider/TextSlide';
import AtomIcon from '@/components/atoms/Icon';

export default {
  components: {
    BaseSlider,
    ImageSlide,
    TextSlide,
    BaseButton,
    AtomIcon
  },
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
.molecule-slider {
  position: relative;
  font-family: sans-serif;

  & svg {
    color: currentColor;
  }

  & button {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: none;
    appearance: none;
    opacity: 0.6;

    &:not(.disabled):hover {
      opacity: 1;
    }

  }

  & .navigation {
    position: absolute;
    top: 50%;
    width: em(64);
    opacity: 0.6;
    transform: translateY(-50%);

    &:not(.disabled):hover {
      opacity: 1;
    }

    &.next {
      right: 0;
    }

  }

  & .pagination {
    margin-top: em(16);

    & button {
      width: em(32);

    }

    & > ul {
      display: none;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;
      list-style: none;

      & li {
        margin: 0 em(8);

        & button {
          font-size: 1em;
        }

        & i {
          display: block;
          width: em(16);
          height: em(16);
          background: #e83463;
          border-radius: 50%;
          opacity: 0.4;
        }

        & [disabled] i {
          opacity: 1;
        }
      }
    }

    & > ul + div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (--sm) {
      & > ul {
        display: flex;

        & + div {
          display: none;
        }
      }

    }

  }
}
</style>
