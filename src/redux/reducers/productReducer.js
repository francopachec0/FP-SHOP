import { ActionTypes } from "../constants/action-types";

export const initialState = {
    products: [],
    productDetails: {},
    cart: []
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

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            let newItem = state.products.find(
                (product) => product.id === action.payload
            )
            let itemInCart = state.cart.find((item) => item.id === newItem.id);
            return {
                ...state,
                cart: action.payload,
            };
        default:
            return state;
    }
};