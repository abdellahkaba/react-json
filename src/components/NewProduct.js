import React, {useState} from 'react'
import {post} from "axios";
import {addProduct} from "../actions/product.action";

export default function NewProduct() {

  const [name,setName] =  useState('')
  const [checked,setChecked] = useState(false)
  const [price,setPrice] = useState(0)

  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  };
  const handleChecked = (e) => {
    setChecked(e.target.value)
  };
  const handlePrice = (e) => {
    setPrice(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    let product = {name,price,checked}
    addProduct(product).then((response) => {
      alert(JSON.stringify(response.data))
    })
  };
  return <>
    <div className="container justify-content-center">
      <div className="card mt-2">
        <div className="card-header">New Product</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={handleName} value={name} />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input onChange={handlePrice} value={price}  type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">State</label>
                <input onChange={handleChecked} checked={checked} type="checkbox" className="form-check-input"/>
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
