import { useDebugValue, useEffect, useState } from 'react';
import './style.css';

const useMediaQuery = (queryValue, initialValue=false) => {
  const [match, setMatch] = useState(initialValue);

  useDebugValue(`Query: ${queryValue}`)

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      console.log('handlechange')
      if(!isMounted) return;
      setMatch(!!matchMedia.matches)
    }

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [queryValue])
  return match;
}

export const Home = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width: 321px)')
  const background = huge ? 'green' : big ? 'blue' : medium? 'red' : small ? 'purple' : null
  return <div style={{fontSize: '60px', background: background}}>ola</div>
}