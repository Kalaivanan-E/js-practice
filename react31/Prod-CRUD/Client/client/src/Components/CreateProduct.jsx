import React, { useState } from 'react'
import  Axios  from 'axios'

const CreateProduct = () => {
  let [product, setProduct] = useState({name:'',image:'',price:'',qty:'',info:''})

   let updateHandler = (event)=>{
    setProduct({...product,[event.target.name]:event.target.value})
  }

  let imageHandler = (event)=>{
    let imgFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.addEventListener("load",()=>{
      if(reader.result){
        setProduct({...product,image:reader.result})
      }
    })
  }

  let submitHandler = (event)=>{
    event.preventDefault();
    let url='http://127.0.0.1:5000/api/products'
    Axios.post(url,product)
    .then(()=>{})
    .catch(()=>{})
  }
 

  return (
    <div className='container mt-5'>
    <pre>{JSON.stringify(product)}</pre>
        <div className="row">
          <div className="col-6 mt-4">
            <div className="card">
              <div className="card-header">
                <h4>Create New Product</h4>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className='form-group'>
                    <label className='mt-1'> Product Name</label>
                    <input type="text"onChange={updateHandler} className='form-control mt-2' name='name' />
                  </div>
                  <div className='form-group'>
                    <label className='mt-2'> Image</label>
                    <input type="file" className='form-control mt-2' onInput={imageHandler} />
                  </div>
                  <div className='form-group'>
                    <label className='mt-3'> Price</label>
                    <input type="number"onChange={updateHandler} className='form-control mt-2'  name='price'/>
                  </div>
                  <div className='form-group'>
                    <label className='mt-3'> Qty</label>
                    <input type="number" onChange={updateHandler} className='form-control mt-2' name='qty' />
                  </div>
                  <div className='form-group'>
                    <label className='mt-3'> info</label>
                    <input type="text" onChange={updateHandler} className='form-control mt-2' name='info' />
                  </div>
                  <input type="submit" value='Create Product' className='btn btn-success mt-3' />
                </form>

              </div>
            </div>
          </div>
        </div>
        
      
    </div>
  )
}

export default CreateProduct