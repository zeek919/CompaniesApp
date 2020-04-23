import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Table.module.scss';

import Input from '../Input/Input';
import Pagination from '../../components/Pagination/Pagination';
import TableHeader from './TableHeader/TableHeader';
import TableRecord from './TableRecord/TableRecord';

import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';
import {
    divideIntoPaginationBlocks,
    selectionSortAscending,
    selectionSortDescending,
    filterPhrase,
} from '../../helpers';
import { ASCENDING, DESCENDING } from '../../constants/sortOrder';
class Table extends Component {
    state = {
        data: [],
        temporaryData: [],
        paginationBlocks: [],
        currentPage: [],
        order: 'ascending',
    };

    async componentDidMount() {
        const paginate = await divideIntoPaginationBlocks(this.props.data);
        this.setState({
            data: this.props.data,
            temporaryData: this.props.data,
            paginationBlocks: paginate,
            currentPage: paginate[0],
        });
    }

    setBasicValue(sortedItems) {
        const paginationSorted = divideIntoPaginationBlocks(sortedItems);
        this.setState({
            paginationBlocks: paginationSorted,
            currentPage: paginationSorted[0],
        });
    }

    handleSort(tagName) {
        const correctCompaniesElementName = tagName
            .replace(/ /g, '')
            .toLowerCase();

        this.setState({ sortTagName: tagName });
        if (this.state.order === DESCENDING) {
            this.setState({ order: ASCENDING });
        }

        if (this.state.order === ASCENDING) {
            this.setState({ order: DESCENDING });
        }

        if (this.state.order === ASCENDING) {
            const sortItems = selectionSortAscending(
                this.state.temporaryData,
                correctCompaniesElementName
            );
            this.setBasicValue(sortItems);
        } else {
            const sortItems = selectionSortDescending(
                this.state.temporaryData,
                correctCompaniesElementName
            );
            this.setBasicValue(sortItems);
        }
    }

    handleSortImage(elementName) {
        if (
            this.state.sortTagName === elementName &&
            this.state.order === ASCENDING
        ) {
            return (
                <img alt="arrowUp" style={{ width: '16px' }} src={arrowUp} />
            );
        }

        if (
            this.state.sortTagName === elementName &&
            this.state.order === DESCENDING
        ) {
            return (
                <img
                    alt="arrowDown"
                    style={{ width: '16px' }}
                    src={arrowDown}
                />
            );
        }

        return '';
    }

    filterHandler(e) {
        this.setState({ temporaryData: this.state.companies });

        const filteredResults = filterPhrase(this.state.data, e.target.value);

        const paginate = divideIntoPaginationBlocks(filteredResults);

        this.setState({
            temporaryData: filteredResults,
            paginationBlocks: paginate,
            currentPage: paginate[0],
        });
    }

    render() {
        const tableHeaders = TableHeader(
            this.props.headers,
            (tagNameToSortBy) => this.handleSort(tagNameToSortBy),
            (elementName) => this.handleSortImage(elementName)
        );
        const tableRecord = TableRecord(this.state.currentPage);

        return (
            <>
                <Input
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.filterHandler(e)}
                />
                <div className={style.wrapper}>
                    <table className={style.table}>
                        <thead>
                            <tr className={style.header}>{tableHeaders}</tr>
                        </thead>
                        <tbody className={style.tbody}>{tableRecord}</tbody>
                    </table>
                </div>
                <Pagination
                    blocksToPaginate={this.state.paginationBlocks}
                    onClick={(page) => this.setState({ currentPage: page })}
                />
            </>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
};

export default Table;
