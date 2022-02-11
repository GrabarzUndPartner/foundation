
export default class ImportWrapper {
  constructor (func) {
    this._func = func;
    this._ready = null;
  }

  ready (...args) {
    return this._ready || (this._ready = this._func(...args));
  }
}

const splide = new ImportWrapper(() => {
  return Promise.all([
    import('@splidejs/splide'),
    import('@splidejs/splide-extension-intersection'),
    import('@splidejs/splide/dist/css/splide-core.min.css')
  ]).then(([Splide, { Intersection }]) => {
    return {
      Splide: Splide.default,
      STATES: Splide.STATES,
      extensions: { Intersection }
    };
  });
});

export const getSplide = () => splide.ready();
