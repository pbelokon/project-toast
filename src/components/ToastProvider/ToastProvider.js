import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext(); 
function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([{id: crypto.randomUUID(), message: "lets go", variant: "success"},
    {id:crypto.randomUUID(), message: "Loggeddd it", variant: "error" } ]);
    const handleEscape = React.useCallback(() => {
      setToasts([])
    }, []);

    useEscapeKey("Escape", handleEscape);
   
    function createToast(message, variant) {
      setToasts([...toasts, {id:crypto.randomUUID(), message, variant}])
    }

    function dismissToast(id) {
      const newToasts = toasts.filter(toast => {
        return toast.id != id;
      })

      setToasts(newToasts);
    }

  

    return <ToastContext.Provider value={{toasts, createToast, dismissToast}}>{children}</ToastContext.Provider>
}

export default ToastProvider;
