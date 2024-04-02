import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons'
import React, { useEffect, useState } from 'react'
import { checkProduct, deleteProduct, getAllProduct } from '../actions/product.action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'



export default function Product() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        handleGetProduct()
    },[])

    const handleGetProduct = () => {
       getAllProduct().then((res) => {
         setProducts(res.data)  
       }).catch((err) =>{
        console.log(err)
       })
    }
    const handlCheckProduct = (product) => {
        checkProduct(product).then((res) => {
           const newProducts = products.map((p) => {
            if(p.id === product.id){
                p.checked = !p.checked
            }
            return p 
           })
           setProducts(newProducts )
        }) 
    } 
    const handleDeleteProduct = (product) => {
        deleteProduct(product).then((res) => {
            handleGetProduct()
        })
    }
    console.log(products)
    return <>
    <div className="p-1 m-1">
        <div className="card">
            <div className="card-header">Produits</div>
            <div className="card-body">
                <table className='table table-border'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button onClick={() => handlCheckProduct(product)} className="btn btn-outline-primary">
                                        <FontAwesomeIcon icon={product.checked ? faCheckCircle : faCircle} ></FontAwesomeIcon>
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteProduct(product)} className='btn btn-outline-danger'>
                                           <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                        <button className='btn btn-outline-success'>
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
    </div>
  </>
}
