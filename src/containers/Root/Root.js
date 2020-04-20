import React, { Component } from 'react';
import axios from 'axios';
import { COMPANIES_API_URL, INCOMES_API_URL } from '../../constants/APIKeys';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import { TABLE_HEADER } from '../../constants/tableHeader';
import fetchCompaniesValues from '../../helpers/fetchCompaniesValues';
import calculateTotalIncomes from '../../helpers/calculateTotalIncomes';

class Root extends Component {
    state = {};

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
        this.setState(APIData);
    }

    render() {
        return (
            <div>
                <Header title="CompaniesApp" />
                <Table items={TABLE_HEADER} />
            </div>
        );
    }
}

export default Root;
