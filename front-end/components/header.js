import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import NProgress from 'nprogress';
import Router from 'next/router';
import styled from 'styled-components';
import styles from '../styles/Header.module.css';

Router.events.on('routerChangeComplete', () => NProgress.done())
Router.events.on('routerChangeError', () => NProgress.done())

const SubBar = styled.div `
     display:grid;
     grid-template-columns:1fr auto;
     border-bottom: 1px solid ${props => props.theme.lightgrey};

`;
const Header = ()=>{
   return (
       <>
       <div className="container">
           {/*<div className="Img">
           <Image
                 src="/images/logo.png"
                 alt="Placeholder"
                 layout="fill"
                 />
   </div>*/}
            
                   <Link href="/"  passHref>
                       <a className="logo">villagerant</a>
                   </Link>
               
           <div className="bar">
               <Navbar />
           </div>
            <div>
               
           </div>
       </div>


       <style jsx>{`
       @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

          .container{
            position:absolute;
            display:flex;
            width:100%;
          }          
          conatiner.Img{
            position:relative;
            margin-top:1.2em;
            width:5rem;
            height:3rem;
        
          }
          .container.bar{
            position:absolute;
            height:100%;
            width:100%;   
          }
          .logo{
            font-family: 'Dancing Script', cursive;
            font-size:2rem;
            position:relative;
            z-index:2;
            transform:skew(-7deg);
          }
          a.logo{
            padding:0.3rem 0.6rem;
            color:#e67331;
            font-weight:400;
            font-family: 'Dancing Script', cursive;
            text-decoration:none;
          }
         @media (max-width:768px){
                .logo{
                    font-size:1.5rem;
                    width:40%;
                }
         }
       `}</style>
       </>
   )
}

export default Header;