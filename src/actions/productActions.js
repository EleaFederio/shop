
import {axios} from "../lib/axios";
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";


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

export const filterProducts = (products, size) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === "" ? products:
            products.filter((x) => x.availableSizes.indexOf(size) >= 0)
        },
    });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    // if empty sort by id
    if(sort === "latest"){
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    }else{
        sortedProducts.sort((a, b) => (
            sort === "lowest" ? 
            // lowest to highest
            a.price > b.price ? 1 : -1
            :
            // highest to lowest
            a.price > b.price ? -1 : 1
        ))
    }
    console.log('----------------------------------------')
    console.log(sortProducts)

    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts
        }
    })
}