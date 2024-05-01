import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userdelete } from "../store/reducers/UserReducer";

const Users = () => {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const DeleteHandler = (id) => {
    // console.log(id)
    dispatch(userdelete(id));
  };
  return (
    <>
      <div className="m-auto container p-10 mt-5 bg-red-100">
        <h1 className="text-2xl font-bold text-red-800">User List</h1>
        {users.map((user) => (
          <div className="" key={user.id}>
            <h1>
              {user.name}{" "}
              <span
                className="text-red-500 font-black cursor-pointer"
                onClick={() => DeleteHandler(user.id)}
              >
                X
              </span>
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
