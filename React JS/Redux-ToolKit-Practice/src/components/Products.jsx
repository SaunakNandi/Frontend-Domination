import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncgetProducts } from "../store/actions/ProductActions";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetProducts());  // asyncgetProducts is now treated as an action
  }, []);
  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-800">Product List</h1>
      <ul>
        <li>
          <h1>Hello</h1>
        </li>
      </ul>
    </div>
  );
};

export default Products;
