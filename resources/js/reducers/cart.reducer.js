import * as types from "../constants";

const initialState = {
    cartNumber: 0,
    cartList: [],
};

// /*
//     item {
//         img
//         bookTitle,
//         AuthorName,
//         price,
//         discountPrice
//         quantity
//         total
//     }
// */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CART_ITEM:
            let cartItem = {
                id: action.payLoad.cartItem.id,
                title: action.payLoad.cartItem.title,
                author: action.payLoad.cartItem.author,
                price: !action.payLoad.cartItem.price
                    ? null
                    : action.payLoad.cartItem.price,
                discountPrice: action.payLoad.cartItem.discountPrice,
                photo: action.payLoad.cartItem.photo,
                quantity: action.payLoad.cartItem.quantity,
            };

            if (state.cartNumber === 0) {
                state.cartList.push(cartItem);
            } else {
                let isItemExisted = state.cartList.some((ele) => {
                    return ele.id == cartItem.id;
                });

                if (!isItemExisted) {
                    state.cartList.push(cartItem);
                } else {
                    state.cartList = state.cartList.map((item) => {
                        if (item.id == cartItem.id) {
                            return {
                                ...item,
                                quantity: item.quantity + cartItem.quantity,
                            };
                        }
                        return item;
                    });
                }
            }

            return {
                ...state,
                cartNumber: state.cartNumber + cartItem.quantity,
            };
        case types.INCREASE_ITEM_QUANTITY: {
            const index = action.payLoad.index;
            let quantity = state.cartList[index].quantity;

            if (quantity < 8) {
                state.cartNumber++;
                state.cartList[index].quantity++;
            }

            return {
                ...state,
            };
        }
        case types.DECREASE_ITEM_QUANTITY: {
            const index = action.payLoad.index;

            let quantity = state.cartList[index].quantity;
            if (quantity > 1) {
                state.cartNumber--;
                state.cartList[index].quantity--;
            } else {
                state.cartList.splice(action.payLoad.index, 1);
            }

            return {
                ...state,
            };
        }
        case types.REMOVE_CART_ITEM:
            const id = action.payLoad.id;
            const findItem = state.cartList.find((item) => item.id === id);

            const cartFiltered = state.cartList.filter((item) => {
                return item.id != findItem.id;
            });

            return {
                ...state,
                cartNumber: state.cartNumber - findItem.quantity,
                cartList: cartFiltered,
            };
        default:
            return state;
    }
};

export default reducer;
