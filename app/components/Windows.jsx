'use client'
import React from 'react'
import { useMenuContext } from '../Context/MenuConext'

const Windows = () => {

    const { toggleMenu, viewMenu } = useMenuContext()

    return (

        
        <main className={` ${ viewMenu ? "flex" : "hidden"} w-full h-screen bg-black/20`}>

            <section className='flex flex-row'>

                <article className='w-[50%]'>
                    <h2> Titulo </h2>
                </article>

                <article className='w-[50%]' >

                </article>

            </section>

        </main>
    )
}

export default Windows