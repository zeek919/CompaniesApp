import React from 'react';
import PropTypes from 'prop-types';
import style from './TableRecord.module.scss';

const TableRecord = (items) => {
    const records = items.map((record) => (
        <tr key={record.id}>
            <td className={style.padding}>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.city}</td>
            <td>{record.totalIncome}</td>
            <td>{record.averageIncome}</td>
            <td>{record.monthIncome}</td>
        </tr>
    ));

    return records;
};

TableRecord.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TableRecord;
