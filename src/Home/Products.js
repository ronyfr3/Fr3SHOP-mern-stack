import React,{useEffect} from 'react'
import Accessories from './Accessories'
import Cameras from './Cameras'
import Phones from './Phones'
import Loading from '../Utils/Loading'
import Error from '../Utils/Error'
import { getProducts } from "../redux/actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";


const Products = () => {
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products);
  const { loading, error } = allproducts;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingBottom:'200px'}}>
          {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error}/>
      ) : (
         <>
          <Phones/>
          <Cameras/>
          <Accessories/>
          </>
    )}
    </div>
    )}

export default Products
