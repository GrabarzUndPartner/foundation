<template>
  <core-structure id="layout">
    <core-structure id="page">
      <core-structure>
        <template #header>
          <core-headline id="headline1">
            Headline (H1)
          </core-headline>
        </template>
        <core-structure>
          <template #header>
            <core-headline id="headline2">
              Headline (h2)
            </core-headline>
          </template>
          <core-structure>
            <core-structure>
              <template #header>
                <core-headline id="headline3">
                  Headline (h3)
                </core-headline>
              </template>
              <core-structure>
                <core-structure>
                  <template #header>
                    <core-headline id="headline4">
                      Headline (h4)
                    </core-headline>
                  </template>
                  <core-structure>
                    <core-structure>
                      <template #header>
                        <core-headline id="headline5">
                          Headline (h5)
                        </core-headline>
                      </template>
                      <core-structure>
                        <core-structure>
                          <template #header>
                            <core-headline id="headline6">
                              Headline (h6)
                            </core-headline>
                          </template>
                          <core-structure>
                            <core-structure>
                              <template #header>
                                <core-headline id="headline7">
                                  Headline (h6)
                                </core-headline>
                              </template>
                            </core-structure>
                          </core-structure>
                        </core-structure>
                      </core-structure>
                    </core-structure>
                  </core-structure>
                </core-structure>
              </core-structure>
            </core-structure>
          </core-structure>
        </core-structure>
      </core-structure>
    </core-structure>
  </core-structure>
</template>

<script>
import CoreHeadline from '@foundation/core/Headline';
import CoreStructure from '@foundation/core/Structure';
export default {
  components: {
    CoreStructure,
    CoreHeadline
  },
  layout: 'test'
};
</script>
