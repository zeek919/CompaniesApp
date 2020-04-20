import React, { Component } from 'react';
import axios from 'axios';
import { APICompanies, APIIncomes } from '../../constants/APIKeys';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import { TABLE_HEADER } from '../../constants/tableHeader';

class Root extends Component {
    state = {
        companiesData: '',
        incomesData: '',
    };

    async componentDidMount() {
        const companiesData = await axios.get(APICompanies);
        this.setState({ companiesData: companiesData.data });
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
