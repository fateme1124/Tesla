import styles from  "./App.module.css";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Cars from "./component/Cars.js";
import Deses from "./component/Deses";
import Join from "./component/Join";
import Footer from "./component/Footer";
import Cards from "./component/Cards";




const  App = () => {

  return (
    <div className={styles.App}>
      <Navbar />
      <Banner />
      <Cars />
      <Deses />
      <Join />
      <Cards/>
      <Footer />
    </div>
  );
}



export default App;





