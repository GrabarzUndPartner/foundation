<template>
  <div>
    <fieldset>
      <legend>Iframe</legend>
      <base-iframe src="https://grabarzundpartner.de">
        <template #placeholder>
          placeholder
        </template>
      </base-iframe>
    </fieldset>
  </div>
</template>

<script>

import BaseIframe from '@foundation/core/Iframe';

export default {
  components: {
    BaseIframe
  }
};

</script>
