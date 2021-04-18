
import React, { useState } from "react";
import FileBase from "react-file-base64";
import {useDispatch} from 'react-redux'
import {createProduct } from '../redux/actions/ProductAction'

const Admin = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    discount: "",
    image: "",
    description: "",
    countInStock: "",
    sku: "",
    model: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(createProduct(inputValue))
      setInputValue({
        name: "",
        category: "",
        brand: "",
        price: "",
        discount: "",
        image: "",
        description: "",
        countInStock: "",
        sku: "",
        model: "",
      })
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "7px auto",
        width:'90%',
        paddingBottom:'230px'
      }}
    >
      <form
      onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "5px auto",
          width: "85%",
          position:"relative"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px auto",
          }}
        >
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>Name</label>
          <input name="name" type='text' value={inputValue.name} onChange={handleChange} style={{padding:'5px 35px 5px 35px',textTransform:'lowercase',width:'90%'}}/>
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>
            Category
          </label>
          <input name="category" type='text' value={inputValue.category} onChange={handleChange}  style={{padding:'5px 35px 5px 35px',textTransform:'lowercase',width:'90%'}}/>
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>
            Brand
          </label>
          <input
           type='text' 
            name="brand"
            value={inputValue.brand}
            onChange={handleChange}
            style={{padding:'5px 35px 5px 35px',textTransform:'lowercase',width:'90%'}}
          />
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>
            Price
          </label>
          <input
            type="number"
            name="price"
            value={inputValue.price}
            onChange={handleChange}
            style={{padding:'5px 35px 5px 35px',textTransform:'lowercase',width:'90%'}}
          />
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>
            Discount
          </label>
          <input
            type="number"
            name="discount"
            value={inputValue.discount}
            onChange={handleChange}
            style={{padding:'5px 35px 5px 35px',textTransform:'lowercase',width:'90%'}}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px auto",
          }}
        >
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>
            Image
          </label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setInputValue({ ...inputValue, image: base64 })
            }
          />
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>
            Description
          </label>
          <input
           type='text' 
            name="description"
            value={inputValue.description}
            onChange={handleChange}
            style={{padding:'5px 35px 5px 35px',textTransform:'lowercase',width:'90%'}}
          />
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>
            CountInStock
          </label>
          <input
            type="number"
            name="countInStock"
            value={inputValue.countInStock}
            onChange={handleChange}
            style={{padding:'5px 35px 5px 35px',textTransform:'lowercase',width:'90%'}}
          />
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>SKU</label>
          <input
           type='text' 
            name="sku"
            value={inputValue.sku}
            onChange={handleChange}
            style={{padding:'5px 35px 5px 35px',textTransform:'lowercase',width:'90%'}}
          />
          <label style={{ marginBottom: "10px", marginTop: "5px" }}>
            Model
          </label>
          <input
           type='text' 
            name="model"
            value={inputValue.model}
            onChange={handleChange}
            style={{padding:'5px 35px 5px 35px',textTransform:'lowercase',marginBottom:'5px',width:'90%'}}
          />
        </div>
        <button style={{border:'none',outline:'none',backgroundColor:'crimson',cursor:'pointer',width:'300px',height:'40px',color:'white',fontSize:'15px'}}>Add Product</button>
      </form>
    </div>
  );
};

export default Admin;
