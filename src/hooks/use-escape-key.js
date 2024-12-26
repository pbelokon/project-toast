import React from 'react'

export default function useEscapeKey(key, callback) {
  React.useEffect(() => { 
    function handleKeyDown(event){
      if (event.code === key) { 
        callback(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    
    return () => { 
      window.addEventListener('keydown', handleKeyDown);
    }
  }, [callback]);
}
