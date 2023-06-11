/* eslint-disable jsx-a11y/alt-text */
import stylesCardTravel from "./CardTravel.module.css";

export const Card = (props) => {
  return (
      <div className={stylesCardTravel.card}>
        <img src={props.url} alt="" />
        <h3 className={stylesCardTravel.cardTitle}>{props.title}</h3>
          <img src="" alt="" />
      </div>
    );
};
