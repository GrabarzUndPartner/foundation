
<script>
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { calc, ipoint } from '@js-basics/vector';
import { isTouchDevice } from './FeatureDetection';

export default {
  data () {
    return {
      subscriptions: [],
      isTouch: false
    };
  },
  mounted () {
    this.isTouch = isTouchDevice();
  },
  destroyed () {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  },
  methods: {
    initSwiperCursors (el, excludes) {
      const mouseMove = fromEvent(el.$el, 'mousemove');
      const pointerUp = fromEvent(el.$el, 'click');

      this.subscriptions.push(
        transformEvent(mouseMove, excludes)
          .subscribe((e) => {
            this.arrowDirection = e.x;
          })
      );

      this.subscriptions.push(
        transformEvent(pointerUp, excludes)
          .subscribe((e) => {
            switch (e.x) {
              case -1:
                if (!this.isTouch) {
                  this.$refs.myswiper.swiper.prev();
                }
                break;
              case 1:
                if (!this.isTouch) {
                  this.$refs.myswiper.swiper.next();
                }
                break;

              default:
                break;
            }
          })
      );
    }
  }
};

function transformEvent (observer, excludes = []) {
  return observer.pipe(
    map(e => calcMovement(e, excludes)),
    map(e => calcDirection(e))
  );
}

function calcDirection (point) {
  return calc(() => Math.sign(point));
}

function calcMovement (e, excludes) {
  if (!isExcluded(e, excludes)) {
    const { x, y, width, height } = e.currentTarget.getBoundingClientRect();
    const relativePosition = ipoint(e.x - x, e.y - y);
    const radius = calc(() => ipoint(width, height) / 2);
    return ipoint(() => (relativePosition - radius) / radius);
  } else {
    return ipoint();
  }
}

function isExcluded (e, excludes) {
  const element = document.elementFromPoint(e.x, e.y);
  const matches = excludes.filter((selector) => {
    return element.matches(selector);
  });

  return matches.length > 0;
}
</script>
