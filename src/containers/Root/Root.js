import React, { Component } from 'react';
import axios from 'axios';
import { COMPANIES_API_URL, INCOMES_API_URL } from '../../constants/apiUrl';
import { TABLE_HEADER } from '../../constants/tableHeader';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import {
    calculateTotalIncomes,
    calculateAverageIncomes,
    calculateLastMonthIncome,
    fetchCompaniesValues,
} from '../../helpers';
import Loader from '../../components/Loader/Loader';
class Root extends Component {
    state = {
        isLoading: true,
        companies: [],
    };

    async componentDidMount() {
        try {
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

            this.setState({
                isLoading: false,
                companies: monthIncomes,
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    render() {
        const { isLoading } = this.state;

        if (isLoading) {
            return <Loader />;
        }

        return (
            <div>
                <Header title="CompaniesApp" />
                <Table
                    placeholder={'Filter results'}
                    headers={TABLE_HEADER}
                    data={this.state.companies}
                />
            </div>
        );
    }
}

export default Root;
