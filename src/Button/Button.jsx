import styles from "./Button.module.css";

const Button = (props) => {
  console.log(props);
  return (
 <button className={props.isOutLine ? styles.mailBtn : styles.primaryBtn}>
      {/* <MdMessage /> */}
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
