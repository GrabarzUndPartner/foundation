<template>
  <base-flyout-navi class="page-header-flyout-navi" v-bind="$attrs" v-on="$listeners">
    <template #label="{option}">
      <span>
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

import BaseFlyoutNavi from '@foundation/core/CollapsibleContainer/FlyoutNavi';
import TransitionExpand from '@foundation/core/CollapsibleContainer/transition/expand';

const CONTENT_COMPONENTS = {
  links: () => import('@/components/page/header/Links'),
  text: () => import('@/components/page/header/Text')
};

export default {
  components: { BaseFlyoutNavi, TransitionExpand },
  inheritAttrs: false,
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
  top: calc(100% - em(32));
  left: 0;
  width: 100%;
  font-family: sans-serif;
  background: #eee;

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
        padding: em(8);
        border: solid #eee em(1);
        border-top-width: 0;
      }
    }
  }

}
</style>
