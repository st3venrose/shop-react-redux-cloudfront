const PRODUCT_API_BASE = 'https://775sy1li29.execute-api.eu-central-1.amazonaws.com/prod';
const IMPORT_API_BASE = 'https://hk6kq5kxd7.execute-api.eu-central-1.amazonaws.com/prod';

const API_PATHS = {
  product: `${PRODUCT_API_BASE}/products`,
  order: `${PRODUCT_API_BASE}/`,
  import: IMPORT_API_BASE,
  bff: `${PRODUCT_API_BASE}/products`,
  cart: `${PRODUCT_API_BASE}/`,
};

export default API_PATHS;
