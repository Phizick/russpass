import { useDispatch, useSelector } from "react-redux";
import { testThunk } from "../../service/slice/testSlice";
import { useEffect } from "react";

export const MainPage = () => {
  useEffect(() => {
    dispatch(testThunk());
  },[testThunk])
  const { users } = useSelector((state) => state.test);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Main Page</h1>
      {users &&
        users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
    </div>
  );
};
