import api from '../api/pictures';

export default {
  /* eslint-disable */
  async getImages({ commit }, params) {
    try {
      const images = await api.getImages(params);
      console.log(images);
      commit('setPictures', images.data);
    }
    catch(e) {
      commit('setGlobalMessage', e.response.data);
    }
  },
};
