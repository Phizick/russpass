import { useDispatch, useSelector } from "react-redux";
import { testThunk } from "../../service/slice/testSlice";
import { useEffect } from "react";
import styleMain from './MainPage.module.css'
import { Header } from "../../components/Header/HeaderLine";


export const MainPage = () => {
  useEffect(() => {
    dispatch(testThunk());
  },[testThunk])
  const { users } = useSelector((state) => state.test);
  const dispatch = useDispatch();
  return (
    <div className={styleMain.container}>
      <Header />
      <h1 className={styleMain.title}>Main Page</h1>
      <h1 className={styleMain.blue}>color blue Page</h1>
      {users &&
        users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
    </div>
  );
};
