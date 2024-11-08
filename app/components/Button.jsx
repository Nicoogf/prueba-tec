'use client'
import React from 'react'
import { useMenuContext } from '../Context/MenuConext'



const Button = () => {
  const { toggleMenu, viewMenu } = useMenuContext()

  return (
    <button className='bg-blue-600 p-2 rounded-xl' onClick={toggleMenu}> 
      Seleccionar Columna 
    </button>
  )
}

export default Button