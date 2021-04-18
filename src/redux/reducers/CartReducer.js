import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/ProductConstant'
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const actualItem = action.payload;
      //find method return array of first satisfied logical item and didn't check other items
      const existingItem = state.cartItems.find((x) => x.id === actualItem.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
          //actualItem is updated value(suppose existing item but qty increased of that existing item)
          // x is previous item ,don't want to change state
            x.id === existingItem.id ? actualItem : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, actualItem] };
      }

    case CART_REMOVE_ITEM:
      return{
        ...state,cartItems:state.cartItems.filter((x)=>x.id!==action.payload)
      }
    default:
      return state;
  }
};
