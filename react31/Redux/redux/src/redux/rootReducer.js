import { combineReducers } from "redux";
import { messageReducer } from "./message/message.reducer";
import { ProductReducer } from "./product/product.reducer";
    

let rootReducer = combineReducers({'message':messageReducer,'product':ProductReducer})

export {rootReducer}