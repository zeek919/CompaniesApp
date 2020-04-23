import React, { Component } from 'react';
import axios from 'axios';
import { COMPANIES_API_URL, INCOMES_API_URL } from '../../constants/APIKeys';
import { TABLE_HEADER } from '../../constants/tableHeader';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import fetchCompaniesValues from '../../helpers/fetchCompaniesValues';
import calculateTotalIncomes from '../../helpers/calculateTotalIncomes';
import calculateAverageIncomes from '../../helpers/calculateAverageIncomes';
import calculateLastMonthIncome from '../../helpers/calculateLastMonthIncome';
import divideIntoPaginationBlocks from '../../helpers/divideIntoPaginationBlocks';
import Pagination from '../../components/Pagination/Pagination';
import selectionSortAscending from '../../helpers/selectionSortAscending';
import selectionSortDescending from '../../helpers/selectionSortDescending';
import Filter from '../../components/Filter/Filter';
import filterPhrase from '../../helpers/filterPhrase';
import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';
import Loader from '../../components/Loader/Loader';
class Root extends Component {
    state = {
        isLoading: true,
        companies: [],
        temporaryData: [],
        paginationBlocks: [],
        currentPage: [],
        order: 'ascending', // DO STALEJ
    };

    async componentDidMount() {
        // TRY CATCH
        const companies = await axios.get(COMPANIES_API_URL);

        const APIData = await Promise.all(
            companies.data.map(async (item) => {
                const fetchedCompaniesValues = await fetchCompaniesValues(
                    item.id,
                    INCOMES_API_URL
                );

                return {
                    ...item,
                    ...fetchedCompaniesValues,
                };
            })
        );

        const totalIncomesValue = calculateTotalIncomes(APIData);
        const averageIncomes = calculateAverageIncomes(totalIncomesValue);
        const monthIncomes = calculateLastMonthIncome(averageIncomes);
        const paginate = divideIntoPaginationBlocks(monthIncomes);

        this.setState({
            isLoading: false,
            companies: monthIncomes,
            temporaryData: monthIncomes,
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

    handleSortImage(elementName) {
        if (
            this.state.sortTagName === elementName &&
            this.state.order === 'ascending'
        ) {
            return <img alt="arrowUp" src={arrowUp} />;
        }

        if (
            this.state.sortTagName === elementName &&
            this.state.order === 'descending'
        ) {
            return <img alt="arrowDown" src={arrowDown} />;
        }

        return '';
    }

    handleSort(tagName) {
        const correctCompaniesElementName = tagName
            .replace(/ /g, '')
            .toLowerCase();

        this.setState({ sortTagName: tagName });
        if (this.state.order === 'descending') {
            this.setState({ order: 'ascending' });
        }

        if (this.state.order === 'ascending') {
            this.setState({ order: 'descending' });
        }

        if (this.state.order === 'ascending') {
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

    filterHandler(e) {
        this.setState({ temporaryData: this.state.companies });

        const filteredResults = filterPhrase(
            this.state.companies,
            e.target.value
        );

        const paginate = divideIntoPaginationBlocks(filteredResults);

        this.setState({
            temporaryData: filteredResults,
            paginationBlocks: paginate,
            currentPage: paginate[0],
        });
    }

    render() {
        const { isLoading } = this.state;

        if (isLoading) {
            return <Loader />;
        }

        return (
            <div>
                <Header title="CompaniesApp" />
                <Filter
                    placeholder="Filter results"
                    onChange={(e) => this.filterHandler(e)}
                />
                <Table
                    headers={TABLE_HEADER}
                    records={this.state.currentPage}
                    sort={(tag) => this.handleSort(tag)} // DO POPRAWY
                    sortImage={(sortedElement) =>
                        this.handleSortImage(sortedElement)
                    } // sortowanie do komponentu
                />
                <Pagination
                    array={this.state.paginationBlocks}
                    onClick={(page) => this.setState({ currentPage: page })}
                />
            </div>
        );
    }
}

export default Root;
