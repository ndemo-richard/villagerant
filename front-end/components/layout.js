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
           <script async>(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='11c7d72fc2c125da1d8799142bc59fd791abcaf71b6aa9840a0698f5c5eb5c2f';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');</script>
        </div>

    );
};

export default Layout;