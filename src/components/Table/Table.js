import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader/TableHeader';
import TableRecord from './TableRecord/TableRecord';
import style from './Table.module.scss';

const Table = ({ headers, records, sort, sortImage }) => {
    const tableHeaders = TableHeader(headers, sort, sortImage);
    const tableRecord = TableRecord(records);

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
    headers: PropTypes.array.isRequired,
    records: PropTypes.array.isRequired,
    sort: PropTypes.func.isRequired,
    sortImage: PropTypes.func,
};

Table.defaultProps = {
    sortImage: () => '',
};

export default Table;
