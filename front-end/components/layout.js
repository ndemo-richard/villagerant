import Head from "next/head";
import Header from "./header";
//import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

const Layout = props =>{
    
    return (
        <div className={styles.Layout}>
            
            <Header/>
         

            <div >{props.children}</div>

           {/* <Footer footer={props.children}/>*/}
          
        </div>
        

    );
    
};

export default Layout;
