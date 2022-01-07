<template>
  <image-text-base class="image-text-design-horizontal" :class="styleClasses">
    <template #image>
      <div class="image">
        <speedkit-picture v-bind="image" />
      </div>
    </template>
    <template #content>
      <div class="content">
        <default-article>
          <template #category>
            Category
          </template>
          <template #headline>
            Headline
          </template>
          <template #subline>
            Subline
          </template>
          <template #default>
            Content
          </template>
        </default-article>
      </div>
    </template>
  </image-text-base>
</template>

<script>
import DefaultArticle from '@foundation/core/Article/Default';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import ImageTextBase from '../';

export default {
  components: {
    ImageTextBase,
    DefaultArticle,
    SpeedkitPicture
  },

  inheritAttrs: false,
  props: {
    imageRight: {
      type: Boolean,
      default: false
    },
    image: {
      type: Object,
      required: true // for data structure see https://nuxt-speedkit.grabarzundpartner.dev/components/speedkit-picture
    },
    overline: {
      type: Object,
      default () {
        return {
          tag: 'h3',
          content: 'Overline'
        };
      }
    },
    headline: {
      type: Object,
      default () {
        return {
          tag: 'h1',
          content: 'Headline'
        };
      }
    },
    copy: {
      type: Object,
      default () {
        return {
          content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.'
        };
      }
    }
  },

  computed: {
    styleClasses () {
      return {
        'style-image-right': this.imageRight
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.image-text-design-horizontal {
  position: relative;
  display: flex;
  flex-flow: column wrap;

  @media (min-width: 768px) {
    flex-flow: row nowrap;

    &.style-image-right {
      flex-flow: row-reverse nowrap;
    }
  }

  & .image {
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }
  }

  & .content {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1em 2em;

    @media (min-width: 768px) {
      width: 50%;
    }
  }

}

</style>
