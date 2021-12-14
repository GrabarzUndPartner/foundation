
<template>
  <div>
    <fieldset>
      <legend>Button</legend>
      <form>
        <base-button />
      </form>
    </fieldset>
    <fieldset>
      <legend>IconButton</legend>
      <form>
        <button-icon icon-name="icn" label="IconButton" />
      </form>
    </fieldset>
  </div>
</template>

<script>

import BaseButton from '@foundation/core/Button';
import ButtonIcon from '@foundation/core/Button/mutation/Icon';

export default {
  components: {
    BaseButton,
    ButtonIcon
  },
  data () {
    return {
      iconButton: {
        iconName: 'check',
        label: 'IconButton'
      }
    };
  }
};

</script>
