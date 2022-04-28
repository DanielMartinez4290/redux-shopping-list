const initialState = {
    items:[]
}

export default function itemsReducer(state = initialState, action) {
    console.log("the action type is %o", action.type);
    switch (action.type) {
        case 'addItem': {
            console.log('add item tripped');
            return {
                ...state,
                items: [...state.items, action.payload],
            }
            break;
        }
        case 'deleteItem': {

            console.log('delete item trippedsss');
            return {
                ...state,
                //items: state.items.filter(item => item.id === action.payload.id)
            }
            break;
        }
        case 'editItem': {
            console.log("item edited");
            break;
        }
        case 'INCREMENT_ASYNC': {
            console.log("increment async tripped");
            break;
        }
        case 'INCREMENT': {
            console.log("increment tripped");
            break;
        }
        default:
            return state
    }
}