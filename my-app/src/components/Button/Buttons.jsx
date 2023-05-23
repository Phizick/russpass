/* eslint-disable jsx-a11y/alt-text */
import stylesButton from "./Button.module.css";

export const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${stylesButton.btnSeason} ${props.className}`}
      onClick={props.onClick}
    >
      <img className={stylesButton.buttonIcon} src={props.icon} />
      
      <span className={stylesButton.buttonText}>{ props.text }</span>
    </button>
  );
};
