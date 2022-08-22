const PRODUCT_API_BASE = 'https://asl05cyz96.execute-api.eu-central-1.amazonaws.com/dev';
const IMPORT_API_BASE = 'https://399q3g0bfk.execute-api.eu-central-1.amazonaws.com/dev';

const API_PATHS = {
  product: `${PRODUCT_API_BASE}/products`,
  order: `${PRODUCT_API_BASE}/`,
  import: IMPORT_API_BASE,
  bff: `${PRODUCT_API_BASE}/products`,
  cart: `${PRODUCT_API_BASE}/`,
};

export default API_PATHS;
