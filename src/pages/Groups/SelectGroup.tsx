import React from 'react';
import {IUser} from "../../interface/app.interface";

type SelectGroupType = {
    options: IUser[]
}


const SelectGroup = ({options}: SelectGroupType) => {
    return (
        <select>
            {
                options.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))
            }
        </select>
    );
};

export default SelectGroup;