import React from 'react'

const OptionsComponent = ({ title, columns, toggleColumn }) => {
    
    return (
        <article className='w-[50%] bg-lime-300 p-4 h-[430px]'>

            <h2 className='bg-gray-100 p-1 text-black text-center font-semibold rounded-md mb-2'>
                {title}
            </h2>

            <div className='flex flex-col gap-y-2'>

                {columns.map((column) => (
                    <p
                        key={column}
                        onClick={() => toggleColumn(column)}
                        className="cursor-pointer text-white p-1 rounded-md text-sm py-2 text-center bg-lime-600"
                    >
                        {column}
                    </p>
                ))}

            </div>

        </article>
    );
}

export default OptionsComponent