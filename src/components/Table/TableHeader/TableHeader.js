import React from 'react';
import style from './TableHeader.module.scss';

const TableHeader = (items) => {
    const headers = items.map((element) => {
        return (
            <th className={style.record} key={element}>
                {element}
            </th>
        );
    });

    return headers;
};

export default TableHeader;
