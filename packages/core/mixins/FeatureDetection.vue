
<script>
export default {
  methods: {
    featureDetection (features) {
      detectTouchEvents(this.$el, features);
      detectIE11(this.$el, features);
      detectIEEdge(this.$el, features);
    }
  }
};

function detectTouchEvents (el, features) {
  if (features.includes('touchevents') && typeof window !== 'undefined') {
    if (isTouchDevice()) {
      el.setAttribute('data-touchevents', true);
    } else {
      el.setAttribute('data-touchevents', false);
    }
  }
}

function detectIE11 (el, features) {
  if (features.includes('ie11') && !!window.MSInputMethodContext && !!document.documentMode) {
    el.setAttribute('data-ie-11', true);
  }
}
function detectIEEdge (el, features) {
  if (features.includes('ieedge') && /Edge\/\d./i.test(window.navigator.userAgent)) {
    el.setAttribute('data-ie-edge', true);
  }
}

export function isTouchDevice () {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const mq = function (query) {
    return window.matchMedia(query).matches;
  };

  if (
    'ontouchstart' in window ||
    // eslint-disable-next-line no-undef
    (window.DocumentTouch && document instanceof DocumentTouch)
  ) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  const query = [
    '(', prefixes.join('touch-enabled),('), 'heartz', ')'
  ].join('');
  return mq(query);
}

</script>
