
export default {
  setPictures(state, payload) {
    state.images = payload;
  },
  setGlobalMessage(state, payload) {
    state.globalMessage = payload;
  },
  nextPage(state) {
    // eslint-disable-next-line
    state.page++;
  },
  prevPage(state) {
    if (state.page > 1) {
      // eslint-disable-next-line
      state.page--;
    }
  },
  setPerPage(state, payload) {
    state.perPage = payload;
  },
  setPageToOne(state) {
    state.page = 1;
  },
};
