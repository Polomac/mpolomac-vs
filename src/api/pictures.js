import axios from 'axios';

export default {
  getImages(params) {
    console.log(params);
    return axios.get(`https://picsum.photos/v2/list/?page=${params.page}&limit=${params.perPage}`);
  },
};
