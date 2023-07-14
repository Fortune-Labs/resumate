import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Showhide = ({children}) => {

  const location= useLocation();
  const [showNavBar, setShowNavBar] = useState(false)
  useEffect(()=> {
    console.log('this is the location:', location)
    if(location.pathname === '/login'){
        setShowNavBar(false)
    }
    else if (location.pathname === '/register'){
        setShowNavBar(false)
    }
    else{
        setShowNavBar(true)
    }
  }, [location])


  return (
    <div>{showNavBar && children}</div>
  )
}

export default Showhide