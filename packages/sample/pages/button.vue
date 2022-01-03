
<template>
  <div>
    <fieldset>
      <legend>Base button</legend>
      <form>
        <base-button label="BaseButton" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Default button disabled</legend>
      <form>
        <default-button label="DefaultButton disabled" :disabled="true" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Default button loading</legend>
      <form>
        <default-button label="DefaultButton loading" :loading="true" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Mutation icon button</legend>
      <form>
        <button-icon icon-name="icn" icon-size="xs" label="IconButton" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Mutation icon button, no label</legend>
      <form>
        <button-icon icon-name="icn" icon-size="md" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Mutation icon button, reversedOrder</legend>
      <form>
        <button-icon icon-name="icn" icon-size="md" label="IconButton" :reversed-order="true" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Mutation icon button disabled</legend>
      <form>
        <button-icon icon-name="icn" icon-size="xs" :disabled="true" label="IconButton disabled" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Mutation icon button loading</legend>
      <form>
        <button-icon icon-name="icn" icon-size="xs" :loading="true" label="IconButton loading" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Mutation file</legend>
      <form>
        <button-file icon-name="icn" icon-size="xs" label="Upload" />
      </form>
    </fieldset>
  </div>
</template>

<script>

import BaseButton from '@foundation/core/Button';
import DefaultButton from '@foundation/core/Button/default';
import ButtonIcon from '@foundation/core/Button/mutation/Icon';
import ButtonFile from '@foundation/core/Button/mutation/File';

export default {
  components: {
    BaseButton,
    DefaultButton,
    ButtonIcon,
    ButtonFile
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
