<template>
  <div>
    <fieldset>
      <legend>Base</legend>
      <base-rich-text>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ul>
        <ol>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ol>
      </base-rich-text>
    </fieldset>
    <fieldset>
      <legend>Base (prop. value)</legend>
      <base-rich-text :value="content" />
    </fieldset>

    <fieldset>
      <legend>Default</legend>
      <default-rich-text>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ul>
        <ol>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ol>
      </default-rich-text>
    </fieldset>
    <fieldset>
      <legend>Default (prop. value)</legend>
      <default-rich-text :value="content" />
    </fieldset>

    <fieldset>
      <legend>Sample</legend>
      <sample-rich-text>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ul>
        <ol>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ol>
      </sample-rich-text>
    </fieldset>

    <fieldset>
      <legend>Sample (prop. value)</legend>
      <sample-rich-text :value="content" />
    </fieldset>
  </div>
</template>

<script>
import BaseRichText from '@foundation/core/RichText';
import DefaultRichText from '@foundation/core/RichText/default';
import SampleRichText from '@/components/atoms/RichText';
export default {
  components: {
    BaseRichText,
    DefaultRichText,
    SampleRichText
  },
  data () {
    return {
      content: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p><ul>  <li>List Item 1</li>  <li>List Item 2</li></ul><ol>  <li>List Item 1</li>  <li>List Item 2</li></ol>'
    };
  }
};

</script>
