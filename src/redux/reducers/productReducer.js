import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    productDetails: {}
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                productDetails: action.payload,
            };
        default:
            return state;
    }
};