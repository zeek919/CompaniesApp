const calculateAverageIncomes = (array) => {
    const companies = array.map((item) => {
        const size = item.incomes.length;
        const average = item.totalIncome / size;

        return { ...item, averageIncome: average };
    });

    return companies;
};

export default calculateAverageIncomes;
