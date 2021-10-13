import { createStore } from "redux";    
import productreducer  from "./reducer/combinereduce";
const store = createStore(productreducer, {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

export default store 