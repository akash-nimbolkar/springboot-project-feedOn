import { LOGOUT } from "../Authentication/ActionType";
import * as actiontypes from "./ActionType";
const initialState = {
    cart: {},  // Initialize as an empty object
    cartItems: [],
    loading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes.FIND_CART_REQUEST:
        case actiontypes.GET_ALL_CART_ITEMS_REQUEST:
        case actiontypes.UPDATE_CARTITEM_REQUEST:
        case actiontypes.REMOVE_CARTITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case actiontypes.FIND_CART_SUCCESS:
            console.log("Cart data received:", action.payload);  // Check if restaurant info is included
            return {
            ...state,
            loading: false,
            cart: action.payload,
            cartItems: action.payload.items || [],  // Clear cart items
            };
              
        case actiontypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartItems: action.payload.items,  // Clear cart items
            };

        case actiontypes.ADD_ITEM_TO_CART_SUCCESS:
            console.log("Updated state after ADD_ITEM_TO_CART_SUCCESS:", {
                ...state,
                cartItems: [...state.cartItems, action.payload],
              });
            return {
                ...state,
                loading: false,
                cartItems: [action.payload, ...state.cartItems],  // Prepend new item
            };

        case actiontypes.UPDATE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id ? action.payload : item  // Update specific item
                ),
            };

        case actiontypes.REMOVE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter((item) =>
                    item.id !== action.payload  // Remove specific item
                ),
            };

        case actiontypes.FIND_CART_FAILURE:
        case actiontypes.UPDATE_CARTITEM_FAILURE:
        case actiontypes.REMOVE_CARTITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case LOGOUT:
            localStorage.removeItem("jwt");
            return {
                ...state,
                cartItems: [],
                cart: {},
                success: "Logout success",
            };

        default:
            return state;
    }
};

export default cartReducer;
