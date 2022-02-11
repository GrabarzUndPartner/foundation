<template>
  <div
    v-font="[
      $getFont('Poppins',400, 'normal'),
      $getFont('Poppins',700, 'normal', {selector: '.nuxt-link-exact-active'})
    ]"
    class="page-header-links"
  >
    <ul>
      <li v-for="link in links" :key="link.title">
        <atom-link v-bind="link" />
      </li>
    </ul>
  </div>
</template>

<script>
import AtomLink from '@/components/atoms/Link';

export default {
  components: {
    AtomLink
  },
  props: {
    links: {
      type: Array,
      default () {
        return [
          {
            title: 'Link 1',
            to: '#1'
          },
          {
            title: 'Link 2',
            to: '#2'
          },
          {
            title: 'Link 3',
            to: '#3'
          }
        ];
      }
    }
  }
};

</script>

<style lang="postcss" scoped>
.page-header-links {
  & ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  & li {
    width: 100%;
    padding: em(8);

    @media (--sm) {
      width: calc(1 / 6 * 100%);
    }
  }

  & a.nuxt-link-exact-active {
    font-weight: bold;
  }

}

</style>

