'use client'
import { createContext, useContext, useState } from "react";

const MenuConext = createContext();

export const useMenuContext = () => {
    const context = useContext(MenuConext);
    if (!context) {
        throw new Error("El useMenuContext debe ser utilizado dentro del provider");
    }
    return context;
};

export const MenuProvider = ({ children }) => {
    const [viewMenu, setViewMenu] = useState(false);

    const menuOptions = [
        "Id",
        "Name",
        "Username",
        "Phone",
        "Address",
        "Website",
        "Email",
        "Company",
    ];

    const [availableColumns, setAvailableColumns] = useState(
        menuOptions.filter((option) => !["Id", "Name", "Username", "Phone"].includes(option))
    );

    const [selectedColumns, setSelectedColumns] = useState(["Id", "Name", "Username", "Phone"]);

    const toggleMenu = () => {
        setViewMenu(!viewMenu);
        console.log(viewMenu);
    };

    const toggleColumn = (column) => {
        if (selectedColumns.includes(column)) {
            setSelectedColumns(selectedColumns.filter((col) => col !== column));
            setAvailableColumns([...availableColumns, column]);
        } else {
            setSelectedColumns([...selectedColumns, column]);
            setAvailableColumns(availableColumns.filter((col) => col !== column));
        }
    };

    return (
        <MenuConext.Provider
            value={{
                toggleMenu,
                viewMenu,
                menuOptions,
                toggleColumn,
                selectedColumns,
                availableColumns,
            }}
        >
            {children}
        </MenuConext.Provider>
    );
};