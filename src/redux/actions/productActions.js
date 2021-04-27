import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

// fetch products
export const fetchProducts = products => {
 
  return dispatch => {
    axios.get("https://shopee.vn/api/v2/cms/daily_discover_config").then(res => {
      dispatch(fetchProductsSuccess(products));
    }).catch(err => {
      dispatch(fetchProductsSuccess(products));
    })
  };
};
