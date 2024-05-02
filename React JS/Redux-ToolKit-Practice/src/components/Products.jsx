import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetProducts } from "../store/actions/ProductActions";

const Products = () => {
  const {products}=useSelector((state)=>state.ProductReducer)
  // console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetProducts());  // asyncgetProducts is now treated as an action
  }, []);
  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-800">Product List</h1>
      <ul>
      {products && products.map((product) => (
          <div className="" key={product.id}>
            <li>
              {product.title}{" "}
              <span
                className="text-red-500 font-black cursor-pointer"
                onClick={() => DeleteHandler(user.id)}
              >
                X
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
