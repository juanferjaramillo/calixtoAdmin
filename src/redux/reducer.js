import {
  GET_ALL_PRODUCTS,
  GET_AUTH_USER,
} from "./action-types.js";
const initialState = {
  allProducts: [],
  filteredProducts: [],
  providers: [],
  authUser: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };

    case GET_ALL_PRODUCTS:
      const { allProds, provs } = action.payload;
      return {
        ...state,
        allProducts: allProds,
        filteredProducts: allProds,
        providers: provs,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
