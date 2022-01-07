<template>
  <stage-base class="stage-design-image-text" v-bind="$attrs" v-on="$listeners">
    <template name="default">
      <div class="content">
        <slot name="overline">
          <component :is="overline.tag" v-if="overline" v-html="overline.content" />
        </slot>
        <slot name="headline">
          <component :is="headline.tag" v-if="headline" v-html="headline.content" />
        </slot>
      </div>
    </template>
  </stage-base>
</template>

<script>
import StageBase from '../';

export default {
  components: {
    StageBase
  },

  inheritAttrs: false,
  props: {
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
    }
  }
};
</script>

<style lang="postcss" scoped>
.stage-design-image-text {
  position: relative;

  & .content {
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: auto;
    text-align: center;
    transform: translateX(-50%);

    @media (min-width: 768px) {
      top: 50%;
      bottom: auto;
      left: 10%;
      width: 50%;
      text-align: left;
      transform: translateY(-50%);
    }
  }

}

</style>
