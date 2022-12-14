import { ADDPRODUCT } from "../actions/productAction";

const initialState = {
  sample: {},
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        sample: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
