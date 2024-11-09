'use client'
import React from 'react'
import Button from './Button'
import { useMenuContext } from '../Context/MenuConext'

const ListUsers = ({ list }) => {

    const { selectedColumns } = useMenuContext();

    return (
        <section className="w-[90%] mx-auto max-w-[1440px] rounded-lg">

            <Button />

            <table className="min-w-full border border-gray-700 shadow-sm rounded-lg overflow-hidden">

                <thead>
                    <tr className="bg-gray-300 text-black">
                        {selectedColumns.includes("Id") && <th className="px-4 py-2 border border-gray-700">Id</th>}
                        {selectedColumns.includes("Name") && <th className="px-4 py-2 border border-gray-700">Name</th>}
                        {selectedColumns.includes("Username") && <th className="px-4 py-2 border border-gray-700">Username</th>}
                        {selectedColumns.includes("Phone") && <th className="px-4 py-2 border border-gray-700">Phone</th>}
                        {selectedColumns.includes("Address") && <th className="px-4 py-2 border border-gray-700">Address</th>}
                        {selectedColumns.includes("Website") && <th className="px-4 py-2 border border-gray-700">Website</th>}
                        {selectedColumns.includes("Email") && <th className="px-4 py-2 border border-gray-700">Email</th>}
                        {selectedColumns.includes("Company") && <th className="px-4 py-2 border border-gray-700">Company</th>}
                    </tr>
                </thead>

                <tbody>
                    {list.map((user) => (
                        <tr key={user.id} className="text-sm font-semibold even:bg-green-800 bg-green-700 hover:bg-indigo-600/40 cursor-pointer">
                            {selectedColumns.includes("Id") && <td className="px-4 py-2 border border-gray-700 text-center">{user.id}</td>}
                            {selectedColumns.includes("Name") && <td className="px-4 py-2 border border-gray-700 text-left">{user.name}</td>}
                            {selectedColumns.includes("Username") && <td className="px-4 py-2 border border-gray-700 text-left">{user.username}</td>}
                            {selectedColumns.includes("Phone") && <td className="px-4 py-2 border border-gray-700 text-left">{user.phone}</td>}
                            {selectedColumns.includes("Address") && <td className="px-4 py-2 border border-gray-700 text-left">{`${user.address.street} - ${user.address.suite}`}</td>}
                            {selectedColumns.includes("Website") && <td className="px-4 py-2 border border-gray-700 text-left">{user.website}</td>}
                            {selectedColumns.includes("Email") && <td className="px-4 py-2 border border-gray-700 text-left">{user.email}</td>}
                            {selectedColumns.includes("Company") && <td className="px-4 py-2 border border-gray-700 text-left">{user.company.name}</td>}
                        </tr>
                    ))}
                </tbody>

            </table>

        </section>
    )
}

export default ListUsers;