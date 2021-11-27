
const initialState = {
    isEditing: false,
    inputText: '',
    updatedItemId: null,
    items: []
}

const tasksReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_ITEM': return {
            ...state,
            items: [...state.items, action.payload]
            }

        case 'REMOVE_ITEM': return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload)
            }

        case 'UPDATE_ITEM': 
        
        return {
         ...state,
          isEditing:true, 
         updatedItemId:action.payload
        
        }

        case 'ADD_AFTER-UPDATE': 
        const newState = {...state}
        const index = newState.items.findIndex(e => e.id === newState.updatedItemId);
        const newObj = {
            id:newState.updatedItemId,
            name:action.payload
        }
        newState.items.splice(index,1,newObj);
        return {
            ...newState,
            isEditing:false,
            items: newState.items
            }


        case 'ADD_TEXT': return {
            ...state,
            isEditing:true,
            inputText: action.payload.text
            }


        case 'REMOVE_ALL_ITEMS': return {
            ...state,
            inputText: '',
            items: []
            }

        default: return state;
    }
}

export default tasksReducer;