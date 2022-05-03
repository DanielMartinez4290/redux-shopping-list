const initialState = {
    items:[]
}

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case 'addItem': {
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        }
        case 'deleteItem': {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        }
        case 'editItem': {
            return {
                ...state,
                items: state.items.map(function(item){
                    if (item.id === action.payload.id) {
                        item.description = action.payload.description;
                        item.name = action.payload.name;
                        item.howMany = action.payload.howMany;
                        return item;
                    }

                    return item;
                })
            }
        }
        default:
            return state
    }
}