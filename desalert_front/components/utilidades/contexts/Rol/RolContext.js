import { createContext, useEffect } from "react";

let dataLocal;

if (typeof window !== 'undefined') {
    dataLocal = localStorage.getItem('rol');
}

const RolContext = createContext({
    rol: dataLocal
});

export default RolContext;