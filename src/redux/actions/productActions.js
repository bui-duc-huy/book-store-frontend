import { db } from "../../firebase";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// fetch products
export const fetchProducts = (fake_data) => {
  return (dispatch) => {
    const ref = db.collection("products_table");
    ref.get().then((res) => {
      let products = [];
      res.forEach((doc) => {
        products.push(doc.data());
      });
      dispatch(fetchProductsSuccess(products));
    });
  };
};
