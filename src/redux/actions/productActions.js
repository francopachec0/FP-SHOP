import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const addToCart = (id) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: id,
    };
};

export const deleteFromCart = (id, all=false) => {
    if (all) {
        return {
            type: ActionTypes.REMOVE_ALL_FROM_CART,
            payload: id,
        };
    } else {
        return {
            type: ActionTypes.REMOVE_ONE_FROM_CART,
            payload: id,
        };
    }
    
};

export const clearCart = () => {
    return {
        type: ActionTypes.CLEAR_CART
    };
}