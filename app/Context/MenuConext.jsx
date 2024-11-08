'use client'

import { createContext, useContext, useState } from "react";


const  MenuConext = createContext() ;

export const useMenuContext = () => {
    const context = useContext(MenuConext)
    if( !context ) {
         throw new Error("El useMenuContext debe ser utilizado dentro del provider")
    }
    return context 
}

export const  MenuProvider = ( {children} ) => {

    const [ viewMenu , setViewMenu ] = useState( false )

    const toggleMenu = () => {
        setViewMenu(!viewMenu)
    }


    return(
        <MenuConext.Provider value = {{toggleMenu}}>
            {children}
        </MenuConext.Provider>
    )
}