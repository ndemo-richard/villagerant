import { useRouter } from 'next/router';
import styles from '../styles/FullMenu.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome} from '@fortawesome/free-solid-svg-icons';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";



export const FullMenu = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <Link href="/">
                <a className="anchor" onClick={() => router.push('/')}><FontAwesomeIcon icon={faHome} size="3x"/>&nbsp;&nbsp;home</a >
            </Link>
            <Link href="/">
                <a className="anchor" onClick={() => window.location.href = 'https://youtube.com/villagerant'}><FontAwesomeIcon icon={faYoutube} color=" #fc1300" size="2x"/>&nbsp;&nbsp;youtube</a>
            </Link>
            <Link href="/">
                <a className="anchor" onClick={() => window.location.href = 'https://facebook.com/villagerant'}><FontAwesomeIcon icon={faFacebook} color="#0589f7" size="2x"/>&nbsp;&nbsp;facebook</a >
            </Link>
            <Link href="/">
                <a className="anchor" onClick={() => window.location.href = 'https://twitter.com/villagerant'}><FontAwesomeIcon icon={faTwitter} color="#49a1eb" size="2x"/>&nbsp;&nbsp;twitter</a>
            </Link>
            <Link href="/">
                <a className="anchor" onClick={() => window.location.href = 'https://instagram.com/villagerant'}><FontAwesomeIcon icon={faInstagram} color=" #e80025" size="2x"/>&nbsp;&nbsp;instagram</a >
            </Link>

            <style jsx>{`
            .anchor{
              padding : 1rem 1rem;
              display: flex;
              align-items:center;
              position:relative;
              text-transform:uppercase;
              font-size:0.6em;
              background:none;
              border:0;
              cursor:pointer;
              color:#2c2c2c;
              //box-shadow: 1px 2px 1px black;
              border-radius:15px;
              
            }
            a.anchor:hover{
              transform: translateY(-2px);
          }
            
            `}</style>
    </div>
  );
};
