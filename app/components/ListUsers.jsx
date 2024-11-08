'use client'
import React from 'react'
import Button from './Button'

const ListUsers = ({ list }) => {


    return (
        <section className="w-[90%] mx-auto max-w-[1440px] bg-slate-950 rounded-lg">

            <Button />

            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company Name</th>
                </tr>

                {
                    list.map((user) => (
                        <tr key={user.id}>
                            <td> {user.id} </td>
                            <td> {user.name} </td>
                            <td> {user.username}</td>
                            <td> {user.email} </td>
                            <td> {user.phone}</td>
                            <td> {user.website}</td>
                            <td> {user.company.name}</td>
                        </tr>
                    ))
                }


            </table>

        </section>

    )
}

export default ListUsers