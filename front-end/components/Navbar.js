import { useState, useCallback, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import {FullMenu} from '../components/fullmenu';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);
  
  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change',updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change',updateTarget);
  }, []);

  return targetReached;
};
  


const Navbar = () => {
   const isBreakpoint = useMediaQuery(768)
   return (
    <div>
      { isBreakpoint ? (
        <div>
          <HamburgerMenu />
        </div>
      ) : (
        <div>
           <FullMenu />
        </div>
      
         )
      }
      </div>
   
    )
}

export default Navbar;