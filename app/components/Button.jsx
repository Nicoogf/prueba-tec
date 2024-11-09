'use client'
import React from 'react'
import { useMenuContext } from '../Context/MenuConext'



const Button = () => {
  const { toggleMenu } = useMenuContext()

  return (
    <button className='bg-white text-black  p-2 rounded-xl my-4' onClick={toggleMenu}>
      Seleccionar Columna
    </button>
  )
}

export default Button