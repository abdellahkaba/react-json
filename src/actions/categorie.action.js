import axios from "axios";


export const api  = axios.create({
    baseURL: "http://localhost:4000"
});

export const getCategory = () => {
   return api.get("/categories")
}

export const deleteCategory =  (categorie) => {
    return api.delete(`/categories/${categorie.id}`)
}

export const disponibleCategory = (categorie) => {
    return api.patch(`/categories/${categorie.id}`, { disponible: !categorie.disponible})
}