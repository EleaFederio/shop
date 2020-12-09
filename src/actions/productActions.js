
import {axios} from "../lib/axios";
import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async(dispatch) => {
    const response = await axios.get('/products').
    catch((error) =>
        console.log("Error", error)
    );
    console.log(response.data.data)
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data.data,
    })
}