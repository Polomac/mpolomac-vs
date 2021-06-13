export default {
  images: state => state.images,
  globalMesssage: state => state.globalMesssage,
  page: state => state.page,
  perPage: state => state.perPage,
  pageMax: state => state.images.length !== state.perPage,
};
