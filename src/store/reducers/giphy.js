import { START_LOADING, STOP_LOADING, STORE_ITEMS, STORE_SELECTED_ITEM } from './../actions/actionTypes';

const initialState = {
    loading: false,
    items: [],
    offSet: 0,
    selectedItem: null,
    searchItemText: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true,
                offSet: state.items.length
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false,
                offSet: state.items.length
            }
        case STORE_ITEMS:
            const newArray =  state.items.concat(action.items);
            return {
                ...state,
                items: newArray,
                offSet: newArray.length,
                searchItemText: action.searchItemText
            }
        case STORE_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.item
            }
        default:
            return state;
    }
}

export default reducer;