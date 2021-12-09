import React from "react";
import { viewportContext } from '../components/contexts/viewportContext';

const useViewport = () => {
    /* We can use the "useContext" Hook to acccess a context from within
       another Hook, remember, Hooks are composable! */
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
}


export default useViewport;

// src: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/