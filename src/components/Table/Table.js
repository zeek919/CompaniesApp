import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader/TableHeader';
import TableRecord from './TableRecord/TableRecord';
import { testData } from '../../testData';
import style from './Table.module.scss';

const Table = ({ items }) => {
    const tableHeaders = TableHeader(items);
    const tableRecord = TableRecord(testData);
    return (
        <div className={style.wrapper}>
            <table className={style.table}>
                <thead>
                    <tr className={style.header}>{tableHeaders}</tr>
                </thead>
                <tbody className={style.tbody}>{tableRecord}</tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Table;
