import React from 'react';
import PropTypes from 'prop-types';
import style from './TableRecord.module.scss';

const TableRecord = (items) => {
    const records = items.map((record) => (
        <tr key={record.id}>
            <td className={style.padding}>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.city}</td>
            <td>{record.totalincome}</td>
            <td>{record.averageincome}</td>
            <td>{record.lastmonthincome}</td>
        </tr>
    ));

    const mobileRecords = items.map((record) => (
        <div className={style.mobileRecord} id={record.id} key={record.id}>
            <p>Id: {record.id}</p>
            <p>Name: {record.name}</p>
            <p>City: {record.city}</p>
            <p>Total Income: {record.totalincome}</p>
            <p>Averga Income: {record.averageincome}</p>
            <p>Last month income: {record.lastmonthincome}</p>
        </div>
    ));

    if (window.screen.width > 600) {
        return records;
    } else {
        return mobileRecords;
    }
};

TableRecord.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TableRecord;
