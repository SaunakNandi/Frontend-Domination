import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetProducts } from "../store/actions/ProductActions";
import { deleteProduct } from "../store/reducers/ProductReducer";

const Products = () => {
  const {products}=useSelector((state)=>state.ProductReducer)
  // console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetProducts());  // asyncgetProducts is now treated as an action
  }, []);
  const DeleteHandler=(id)=>{
    console.log("called")
    dispatch(deleteProduct(id))
  }
  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-800">Product List</h1>
      <ul>
      {products && products.map((product) => (
          
            <li className="" key={product.id}>
              {product.title}{" "}
              <span
                className="text-red-500 font-black cursor-pointer"
                onClick={() => DeleteHandler(product.id)}
              >
                X
              </span>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
