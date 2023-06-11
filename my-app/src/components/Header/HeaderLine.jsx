/* eslint-disable jsx-a11y/alt-text */
import stylesHeader from "./Header.module.css";
import Logo from "../../icons/header/Logo.svg";
import burgerMenu from "../../icons/header/ic_burger_menu.svg";
import iconSearch from "../../icons/header/ic_search.svg";
import coinSmall from "../../icons/header/ic_coin_small.svg";
import star from "../../icons/header/star.svg";
import rusFlag from "../../icons/header/rus_flag.svg";
import helpers from "../../icons/header/helpers.svg";
import heart from "../../icons/header/heart.svg";

export const Header = () => {
  return (
    <div className={stylesHeader.container}>
      <div className={stylesHeader.logoBlock}>
        <img className={stylesHeader.logo} src={Logo} alt={"prev"} />
        <div className={stylesHeader.btnMenu}>
          <img className={stylesHeader.ic_burger_menu} src={burgerMenu} />
          <p className={stylesHeader.textMenu}>Меню</p>
        </div>
        <div className={stylesHeader.btnSearch}>
          <img src={iconSearch} />
        </div>
        <div className={stylesHeader.btnBonus}>
          <p className={stylesHeader.textMenu}>Бонусы</p>
          <img src={coinSmall} />
          <img className={stylesHeader.stars} src={star} />
        </div>
      </div>
      <div className={stylesHeader.flexRight}>
        <div className={stylesHeader.flexItem}>
          <img className={stylesHeader.ic_rus_flag} src={rusFlag} />
          <span className={stylesHeader.textRus}>РУС / RUB</span>
        </div>
        <div className={stylesHeader.flexItem}>
          <img className={stylesHeader.ic_rus_flag} src={helpers} />
          <span className={stylesHeader.textRus}>Поддержка</span>
        </div>
        <div className={stylesHeader.flexItem}>
          <img className={stylesHeader.ic_rus_flag} src={heart} />
          <span className={stylesHeader.textRus}>Избранное</span>
        </div>
      </div>
    </div>
  );
};
