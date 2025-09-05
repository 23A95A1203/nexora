const BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const PRODUCTS_URL = `${BASE_URL}/api/v1/products`;
export const UPLOAD_URL = `${BASE_URL}/api/v1/upload`;
export const USERS_URL = `${BASE_URL}/api/v1/users`;
export const ORDERS_URL = `${BASE_URL}/api/v1/orders`;
export const PAYMENT_URL = `${BASE_URL}/api/v1/payment`;

export default BASE_URL;
