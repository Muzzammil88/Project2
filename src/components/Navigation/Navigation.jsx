import styles from "./Navigation.module.css";
const Navigation = () =>


{
  return (
   
     
      <nav className={`${styles.navigation} container`}> 
      <div className={styles.logo}>
      <img src="images/24logo.png" alt="logo" />
    </div>
    <div className={styles.abc}>
        <a id="1" href="./images/R.jpg">Home</a>
        <a id="2" href="#">About</a>
        <a id="3" href="#">Contat</a>

      </div>
      </nav>

    
  )
};

export default Navigation;
