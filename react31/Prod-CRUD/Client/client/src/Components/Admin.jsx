// import React from 'react'

// const Admin = () => {
//   return (
//     <div className='container mt-5'>
//       <div className="row">
//         <div className="col-6">
//           <a href="/createproduct"><button className='btn btn-warning'> Create New Product</button></a>
//         </div>
//       </div>
//       <div className="row">
        
//       </div>
//     </div>
//   )
// }

// export default Admin


import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const Admin = () => {

  let [products,setProducts] = useState([])

  useEffect(()=>{
    getProduct();    
  },[])

  let getProduct = ()=>{
    Axios.get("http://127.0.0.1:5000/api/products")
    .then((resp)=>{
      setProducts(resp.data)
    })
    .catch(()=>{

    })
  }

  let deleteProduct = (p_Id)=>{
    let url = 'http://127.0.0.1:5000/api/products/${p_Id}'
    Axios.delete(url)
    .then((resp)=>{
      getProduct();
    })
    .catch((error)=>{
      console.log('error')
    })
  }

  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-6">
          <Link to ="/createproduct"><button className='btn btn-warning'> Create New Product</button></Link>
        </div>
      </div>
      <div className="row">
      <pre>{JSON.stringify(products)}</pre>
        <div className="col">
          <table className='table'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                products.length > 0 ? <>
                  {
                    products.map((product,index)=>{
                      return <tr>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.qty}</td>
                        <td>
                          <Link to='/update-product' className='btn btn-warning mr-2'> Update</Link>
                          <button onClick={deleteProduct.bind(null,product._id)} className='btn btn-danger '>Delete</button>
                        </td>
                      </tr>
                    })
                  }
                </> : <><h3>No Data</h3></>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin


