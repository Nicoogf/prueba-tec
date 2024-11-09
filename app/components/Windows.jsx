'use client'
import React, { useState } from 'react'
import { useMenuContext } from '../Context/MenuConext'
import OptionsComponent from './OptionsComponent';

const Windows = () => {

    const { toggleMenu, viewMenu, availableColumns, selectedColumns, toggleColumn } = useMenuContext();
    const [searchTerm, setSearchTerm] = useState(""); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase()); 
    };

    const filteredAvailableColumns = availableColumns.filter((option) =>
        option.toLowerCase().includes(searchTerm) 
    );

    const filteredSelectedColumns = selectedColumns.filter((column) =>
        column.toLowerCase().includes(searchTerm) 
    );

    return (
        <main className={`${viewMenu ? " translate-y-0" : "translate-y-[2000px]"} w-full h-screen bg-black/50 z-50 absolute top-0 transition-all duration-300`}>
          <div className='relative w-full h-screen flex flex-col items-center justify-center'>
            <button onClick={toggleMenu} className='bg-red-500 h-8 w-8 rounded-full font-semibold absolute top-4 right-4'> x </button>
    
            <section className='flex flex-col w-[95%] mx-auto max-w-[768px] bg-lime-800 h-[550px]'>
              <header>
                <input 
                  className='bg-white p-2 rounded-full block mx-auto my-5 text-black font-semibold pl-4' 
                  placeholder="Ingresar Campo"
                  value={searchTerm}
                  onChange={handleSearchChange} 
                />
              </header>
    
              <section className='flex flex-row gap-4 p-2'>
                <OptionsComponent 
                  title="Columnas Disponibles" 
                  columns={filteredAvailableColumns} 
                  toggleColumn={toggleColumn} 
                />
                <OptionsComponent 
                  title="Columnas Seleccionadas" 
                  columns={filteredSelectedColumns} 
                  toggleColumn={toggleColumn} 
                />

              </section>
            </section>
          </div>
        </main>
      )
}

export default Windows;