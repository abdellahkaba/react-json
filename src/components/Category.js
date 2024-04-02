import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faPencil, faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteCategory, disponibleCategory, getCategory} from "../actions/categorie.action";
import {faCircle} from "@fortawesome/free-regular-svg-icons";

export default function Category () {

    const [categories,setCategories] = useState([])
    useEffect(() => {
        handleGetCategory()
    },[])

    const handleGetCategory = () => {
        getCategory().then((response) => {
            setCategories(response.data)
        }).catch((error) => {
            console.log("Desole il y'a une erreur de chargement")
        })
    }

    const handleDeleteCategory = (categorie) => {
        deleteCategory(categorie).then((res) => {
            handleGetCategory()
        })
    }

    const deleteHandleCategory = (categorie) => {
        deleteCategory(categorie).then((response) => {
            const newCategorie = categories.filter((c) => c.id !== categorie.id)
            setCategories(newCategorie)
        })
    }

    const handleDisponibleCategory = (categorie) => {
        disponibleCategory(categorie).then((response) => {
            const newDispoCategorie =  categories.map((c) => {
                if(c.id === categorie.id){
                    c.disponible = !c.disponible
                }
                return c
            })
            setCategories(newDispoCategorie)
        })
    };
    return <>
        <div className="card">
            <div className="card-header">Les Categories</div>
            <div className="card-body">
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th>ID</th><th>Category</th><th>Description</th><th>Disponible</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        categories.map((categ) => (
                           <tr key={categ.id}>
                               <td>{categ.id}</td>
                               <td>{categ.name}</td>
                               <td>{categ.description}</td>
                               <td>
                                    <button onClick={() => handleDisponibleCategory(categ)} className="btn btn-outline-info">
                                        <FontAwesomeIcon icon={categ.disponible ? faCircleCheck : faCircle}></FontAwesomeIcon>
                                    </button>
                               </td>
                               <td>
                                   <button onClick={() => deleteHandleCategory(categ)} className="btn btn-outline-danger">
                                       <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                   </button>
                                   <button className="btn btn-outline-success">
                                       <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                                   </button>
                               </td>
                           </tr>
                       ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </>

}