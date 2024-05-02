import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

// This is higher order function
// function a(){
//     return function() {}
// }

// Since this is not treated as a component so we cant use useDispatch to call getProducts. Hence we are using higher order function which gives the dispatch as argument

export const asyncgetProducts=()=> async(dispatch,getState)=>{
    console.log(getState)  // getState gives the state i.e the global state(store wali state)
    try {
        const response=await axios.get("https://fakestoreapi.com/products")
        // here we have data of products that is sync data
        // console.log(response.data)
        dispatch(getProducts(response.data))  // cal any action using dispatch()
    } catch (error) {
        console.log()
    }
}