import React, { createContext, useEffect, useState } from 'react'

const rolContext = createContext();

const rolContextProvider =({ children }) => {

    const [rol, setRol] = useState(null);

    /*useEffect(() => {
        const extraerRol = () => {
            setRol(localStorage.getItem('rol'));
        }

        extraerRol();
    }, [])*/

    setRol(localStorage.getItem('rol'))

    return(
        <rolContext.Provider value={rol}>
            {children}
        </rolContext.Provider>
    )
}

export { rolContext, rolContextProvider };
