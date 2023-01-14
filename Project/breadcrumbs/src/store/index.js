import {createStore} from "redux";
import reduxReducer  from "./reduxReducer";

//imporing and assiging reducer fun
const reduxReducerFunc = reduxReducer

//creating new redux store
const store = createStore(reduxReducerFunc)
export default store;