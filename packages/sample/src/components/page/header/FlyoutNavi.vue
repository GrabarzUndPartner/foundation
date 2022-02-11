<template>
  <base-flyout-navi
    class="page-header-flyout-navi"
    v-bind="$attrs"
    :dataset="dataset"
    v-on="$listeners"
  >
    <template #label="{option}">
      <span
        v-font="$getFont('Poppins', 400)"
      >
        {{ option.label }}
      </span>
    </template>
    <template #content="{show, option}">
      <transition-expand>
        <section v-show="show">
          <div>
            <slot name="content" v-bind="{show, option}">
              <component :is="getContentComponent(option.content.type)" v-bind="option.content.props" />
            </slot>
          </div>
        </section>
      </transition-expand>
    </template>
  </base-flyout-navi>
</template>

<script>

import Dataset from '@foundation/core/CollapsibleContainer/classes/Dataset';
import BaseFlyoutNavi from '@foundation/core/CollapsibleContainer/FlyoutNavi';
import TransitionExpand from '@foundation/core/CollapsibleContainer/transition/expand';

const CONTENT_COMPONENTS = {
  links: () => import('@/components/page/header/Links'),
  text: () => import('@/components/page/header/Text')
};

export default {
  components: { BaseFlyoutNavi, TransitionExpand },
  inheritAttrs: false,

  props: {
    dataset: {
      type: Dataset,
      required: true
    }
  },

  data () {
    return { unsubscribe: null };
  },

  mounted () {
    this.unsubscribe = this.$router.afterEach(() => {
      const model = this.dataset.model;
      model.value = null;
    });
  },

  destroyed () {
    this.unsubscribe();
  },

  methods: {
    getContentComponent (type) {
      return CONTENT_COMPONENTS[String(type)];
    }
  }
};

</script>

<style lang="postcss" scoped>
.page-header-flyout-navi {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  & >>> {
    & label {
      align-items: center;
      padding: em(8);
      line-height: 1;
      cursor: pointer;
      background: #eee;

      & > span {
        font-size: em(14);
      }
    }

    & input:focus + label {
      color: #fff;
      background: #aaa;
    }

    & input:checked + label,
    & label:hover {
      color: #fff;
      background: #333;
    }

    & section {
      background: #fff;

      & > div {
        max-height: 70vh;
        padding: em(8);
        overflow: auto;
        border: solid #eee em(1);
        border-top-width: 0;
      }
    }
  }

}
</style>
