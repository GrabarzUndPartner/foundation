<template>
  <core-structure id="layout">
    <core-structure id="page">
      <core-structure>
        <template #header>
          <core-headline id="headline1">
            Headline (H1)
          </core-headline>
        </template>
        <p>…</p>
        <core-structure>
          <template #header>
            <core-headline id="headline2_1">
              Headline (H2)
            </core-headline>
          </template>
          <p>…</p>
          <core-structure>
            <template #header>
              <core-headline id="headline2_2">
                Headline (H2)
              </core-headline>
            </template>
            <p>…</p>
            <core-structure>
              <template #header>
                <core-headline id="headline3_1">
                  Headline (H3)
                </core-headline>
              </template>
              <p>…</p>
              <core-structure>
                <template #header>
                  <core-headline id="headline3_2">
                    Headline (H3)
                  </core-headline>
                </template>
                <p>…</p>
                <core-structure>
                  <template #header>
                    <core-headline id="headline4_1">
                      Headline (H4)
                    </core-headline>
                  </template>
                  <p>…</p>
                  <core-structure>
                    <template #header>
                      <core-headline id="headline4_2">
                        Headline (H4)
                      </core-headline>
                    </template>
                    <p>…</p>
                    <core-structure>
                      <template #header>
                        <core-headline id="headline5_1">
                          Headline (H5)
                        </core-headline>
                      </template>
                      <p>…</p>
                      <core-structure>
                        <template #header>
                          <core-headline id="headline5_2">
                            Headline (H5)
                          </core-headline>
                        </template>
                        <p>…</p>
                        <core-structure>
                          <template #header>
                            <core-headline id="headline6_1">
                              Headline (H6)
                            </core-headline>
                          </template>
                          <p>…</p>
                          <core-structure>
                            <template #header>
                              <core-headline id="headline6_2">
                                Headline (H6)
                              </core-headline>
                            </template>
                            <p>…</p>
                            <core-structure>
                              <template #header>
                                <core-headline id="headline7_1">
                                  Headline (H6)
                                </core-headline>
                              </template>
                              <p>…</p>
                              <core-structure>
                                <template #header>
                                  <core-headline id="headline7_2">
                                    Headline (H6)
                                  </core-headline>
                                </template>
                                <p>…</p>
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
