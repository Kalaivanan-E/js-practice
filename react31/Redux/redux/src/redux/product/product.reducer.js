
let initialState = {
    'product_Name':'Iphone 17',
    'price':150000,
    'qty':1
}
let ProductReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'INCR':
            return {...state,qty:state.qty+1}
        case 'DECR':
            return {}
        default:
            return state;
    }
}

export {ProductReducer}