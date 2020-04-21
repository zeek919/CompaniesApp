import React, { Component } from 'react';
import axios from 'axios';
import { COMPANIES_API_URL, INCOMES_API_URL } from '../../constants/APIKeys';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import { TABLE_HEADER } from '../../constants/tableHeader';
import fetchCompaniesValues from '../../helpers/fetchCompaniesValues';
import calculateTotalIncomes from '../../helpers/calculateTotalIncomes';
import calculateAverageIncomes from '../../helpers/calculateAverageIncomes';
import calculateLastMonthIncome from '../../helpers/calculateLastMonthIncome';
import divideIntoPaginationBlocks from '../../helpers/divideIntoPaginationBlocks';
import Pagination from '../../components/Pagination/Pagination';
class Root extends Component {
    state = {
        companies: [],
        paginationBlocks: [],
        currentPage: [],
    };

    async componentDidMount() {
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
            companies: monthIncomes,
            paginationBlocks: paginate,
            currentPage: paginate[0],
        });
        // console.log(this.state.paginationBlocks);
    }

    render() {
        return (
            <div>
                <Header title="CompaniesApp" />
                <Table
                    headers={TABLE_HEADER}
                    records={this.state.currentPage}
                />
                <Pagination
                    array={this.state.paginationBlocks}
                    onClick={(it) => this.setState({ currentPage: it })}
                />
            </div>
        );
    }
}

export default Root;
