import React, {useState} from "react";
import {addCategory} from "../actions/categorie.action";

export default function NewCategory () {

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [disponible,setDisponible] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let category = {name,description,disponible}
        addCategory(category).then((response) => {
            alert(JSON.stringify(response.data))
        })
    };
    const handleName = (e) => {
           setName(e.target.value)
    };
    const handleDescription = (e) => {
        setDescription(e.target.value)
    };
    const handleDisponible = (e) => {
        setDisponible(e.target.value)
    };
    return <>
        <div className="container justify-content-center">
            <div className="card mt-2">
                <div className="card-header">New Category</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" onChange={handleName} value={name} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input onChange={handleDescription} value={description}  type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Disponible</label>
                                <input onChange={handleDisponible} checked={disponible} type="checkbox" className="form-check-input"/>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-success">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}