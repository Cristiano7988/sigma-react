import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';

export const MenuLateral = () => {

    const menu = useRef(null);

    const menuitems = [
        {
            label: 'ShowRoom',
            items: [
                {
                    label: 'Veículos',
                    icon: 'pi pi-fw pi-search',
                }
            ]
        }
    ];

    return (
        <div className="p-col-2">
            <div className="card">
                <Menu model={menuitems} />
            </div>
        </div>
    )
}

export default MenuLateral;