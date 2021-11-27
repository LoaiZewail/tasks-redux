export const loadState = ()=>{
    try{
        const localstorageItems = localStorage.getItem('items');
        if(localstorageItems === null){
            return undefined;
        }
        return JSON.parse(localstorageItems);
    }catch(e){
        return undefined;
    }
}

export const saveState = (stateItems) =>{
    const setLocalstarageItems = JSON.stringify(stateItems);
    localStorage.setItem('items',setLocalstarageItems);
}