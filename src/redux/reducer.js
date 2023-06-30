import {
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_AUTH_USER,
  LOGOUT,
  UPDATE_PRODUCT
} from "./action-types.js";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  providers: [],
  authUser: JSON.parse(sessionStorage.getItem("user")) || {},
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

    case DELETE_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
      };

      case UPDATE_PRODUCT:
        return {
          ...state,
          allProducts: action.payload,
          filteredProducts: action.payload,
        };

        case LOGOUT:
          return {
            ...state,
            allProducts: [],
            filteredProducts: [],
            providers:[],
            authUser:{}
          }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
