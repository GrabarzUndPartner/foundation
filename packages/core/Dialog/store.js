const state = () => ({
  content: null
});

const mutations = {
  open (state, content) {
    console.log('open', state, content);
    state.content = content;
  },

  close (state) {
    state.content = null;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
