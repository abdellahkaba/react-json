import axios from "axios";

export const api  = axios.create({
    baseURL: "http://localhost:4000"
});

// export const getAllProduct = (keyword='', page = 1, size = 2) => {
//     return api.get(`/products?name_like=${keyword}&_page=${page}&_limit=${size}`) ;
// }
export const getAllProduct = (keyword) => {
    return api.get(`/products`) ;
}

export const deleteProduct = (product) => {
    return api.delete(`/products/${product.id}`)
}

export const getProduct = (id) => {
    return api.get(`/products/${id}`)
} 

export const addProduct = (product) => {
    return api.post(`/products`,product)
}

export const checkProduct = (product) => {
    return api.patch(`/products/${product.id}`, {checked: !product.checked})
}

