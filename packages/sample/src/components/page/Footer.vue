<template>
  <layout-lost-container class="page-footer">
    <nav>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <atom-link to="/" v-bind="link" />
        </li>
      </ul>
    </nav>
  </layout-lost-container>
</template>

<script>

import LayoutLostContainer from '@/components/layouts/LostContainer';
import AtomLink from '@/components/atoms/Link';
export default {
  components: { LayoutLostContainer, AtomLink },
  props: {
    links: {
      type: Array,
      default () {
        return Array(3).fill({}).map((v, index) => ({ title: `Link ${index}`, to: `#${index}` }));
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.page-footer {
  padding: em(32) em(calc(32 / 2));
  background: var(--color-default-background);

  & >>> a {
    text-decoration: none;
  }

  & ul {
    padding: 0;
    margin: 0;
    list-style: none;

    & li {
      display: inline-block;

      & + li {
        margin-left: em(16);
      }
    }
  }

}

</style>
