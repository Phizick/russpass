import { useDispatch, useSelector } from "react-redux";
import { testThunk } from "../../service/slice/testSlice";
import { useEffect } from "react";
import styleMain from './MainPage.module.css'
import { Header } from "../../components/Header/HeaderLine";
import { Button } from "../../components/Button/Buttons";
import sun from "../../icons/Buttons/Sun.svg";
import Rainbow from "../../icons/Buttons/Rainbow.svg";
import Winter from "../../icons/Buttons/Winter.svg";
import Spring from "../../icons/Buttons/Spring.svg";
import { Card } from "../../components/Card/CardTravel";
import imageCard1 from "../../Images/Card1.png"

export const MainPage = () => {
  useEffect(() => {
    dispatch(testThunk());
  },[testThunk])
  const { users } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  return (
    <div className={styleMain.container}>
      <Header />
      <div className={styleMain.titleBlock}>
        <h1 className={styleMain.titleText}> Путешествия по России <br /> начинаются тут! </h1>
      </div>
      
      <div className={styleMain.whiteBlock}>
        <div className={styleMain.btnGroup}>
          <Button 
            type="submit"
            className="btnSeason"
            text="Летний сезон"
            icon={sun}
          />
          <Button 
            type="submit"
            className="btnSeason"
            text="Осенний сезон"
            icon={Rainbow}
          />
          <Button 
            type="submit"
            className="btnSeason"
            text="Зимний сезон"
            icon={Winter}
          />
          <Button 
            type="submit"
            className="btnSeason"
            text="Весенний сезон"
            icon={Spring}
          />
        </div>
        <div>
          <Card
            title="Путешествия на едине"
            url={imageCard1}
          />
          <Card 
            title="Путешествия на"
            url={imageCard1}
          />
          <Card 
            title="Другое"
            url={imageCard1}
          />
          <Card 
            title="Путешествия с семьей"
            url={imageCard1}
          />
        </div>
      </div>

      {/* <h1>color blue Page</h1>
      {users &&
        users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })} */}
        <footer className={styleMain.footer}>
          <div className={styleMain.row}>
            <h3>Журнал</h3>
            <h3>Каталог</h3>
            <h3>Партнерам</h3>
            <h3>О проекте</h3>
          </div>
        </footer>
    </div>
  );
};
