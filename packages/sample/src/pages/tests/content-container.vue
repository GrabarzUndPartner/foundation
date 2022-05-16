<template>
  <core-structure id="layout">
    <template #header>
      Header
    </template>
    <template #default>
      <!-- Page Container -->
      <core-structure id="page">
        <!-- Page Components: -->

        <!-- Page Describe Component -->
        <core-structure id="pageDescribeComponent">
          <template #header>
            <core-headline>Page Headline</core-headline>
          </template>
        </core-structure>

        <!-- Page Content Components -->
        <core-structure id="pageComponents">
          <!-- First Content Component -->
          <core-structure id="firstContentComponent">
            <template #header>
              <core-headline>Content Component Basic</core-headline>
            </template>
            <p>Lorem ipsum…</p>
          </core-structure>

          <!-- Second Content Component -->
          <core-structure id="secondaryContentComponent">
            <template #header>
              <core-headline>Content Component With Content Section</core-headline>
            </template>
            <core-structure>
              <template #header>
                <core-headline>Content Section</core-headline>
              </template>
              <p>Lorem ipsum…</p>
            </core-structure>
          </core-structure>

          <!-- Tertiary Content Component -->
          <core-structure id="tertiaryContentComponent">
            <template #header>
              <core-headline>Content Component with inner Articles</core-headline>
            </template>
            <p>Lorem ipsum…</p>
            <core-structure>
              <template #header>
                <core-headline>Inner Articles</core-headline>
              </template>
              <!-- Inner Component 1 -->
              <core-structure>
                <template #header>
                  <core-headline>Inner Content Component 1</core-headline>
                </template>
                <p>Lorem ipsum…</p>
              </core-structure>
              <!-- Inner Component 2 -->
              <core-structure>
                <template #header>
                  <core-headline>Inner Content Component 2</core-headline>
                </template>
                <p>Lorem ipsum…</p>
              </core-structure>
            </core-structure>
          </core-structure>
        </core-structure>
      </core-structure>
    </template>
    <template #footer>
      Footer
    </template>
  </core-structure>
</template>

<script>
import CoreHeadline from '@foundation/core/Headline';
import CoreStructure from '@foundation/core/ContentContainer';
export default {
  components: {
    CoreStructure,
    CoreHeadline
  },
  layout: 'test'
};
</script>
