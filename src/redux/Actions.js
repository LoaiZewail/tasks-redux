
export const addItem = (value) => {
    return {
        type: 'ADD_ITEM',
        payload: value
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}

export const updateItem = (id) => {
    
    return {
        type: 'UPDATE_ITEM',
        payload: id
    }
}

export const addAfterUpdate = (inputText) => {
    return {
        type: 'ADD_AFTER-UPDATE',
        payload: inputText
    }
}

export const addTextToInput = (text) => {
    return {
        type: 'ADD_TEXT',
        payload: text
    }
}

export const removeAllItems = () => {
    return {
        type: 'REMOVE_ALL_ITEMS'
    }
}