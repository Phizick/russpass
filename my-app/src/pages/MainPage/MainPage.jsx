import { useDispatch, useSelector } from "react-redux";
import { testThunk } from "../../service/slice/testSlice";

export const MainPage = () => {
  const { users } = useSelector((state) => state.test);
  const dispatch = useDispatch();
  const getUsers = () => {
    dispatch(testThunk());
  };
  return (
    <div>
      <button onClick={getUsers}>Получить пользователей</button>
      <h1>Main Page</h1>
      {users &&
        users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
    </div>
  );
};
