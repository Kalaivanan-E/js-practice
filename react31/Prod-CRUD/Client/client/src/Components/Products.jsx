import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  let [products,setProducts] = useState([])
  useEffect(()=>{
     Axios.get('http://127.0.0.1:5000/api/products')
    .then((resp)=>{setProducts(resp.data)})
    .catch((err)=>{console.log(err)})
  },[])
  return (
    <div>
    
      {/* <pre> {JSON.stringify(products)}</pre> */}
      <div className="container mt-5">
        <div className="row">
        {
          products.length > 0? <>
            {
              products.map((product)=>{
                return <div className="col-3">
                  <div className="card">
                    <div className="card-header">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="card-body">
                      <ul className='list-group'>
                        <li className='list-group-item'>{product.name}</li>
                        <li className='list-group-item'>{product.price}</li>
                        <li className='list-group-item'>{product.qty}</li>
                        <li className='list-group-item'><button className='btn btn-warning mt-3'> Add to Cart</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              })
            }
          </> : <h4>No Data</h4>
        }
          
        </div>
    </div>
    </div>
  )
}

export default Products;