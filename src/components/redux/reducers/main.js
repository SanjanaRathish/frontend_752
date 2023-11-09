import { getProductsreducer } from "./Productsreducer";
import {combinReducers, combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata: getProductsreducer
});

export default rootreducers;