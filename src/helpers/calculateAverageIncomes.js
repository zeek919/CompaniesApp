const calculateAverageIncomes = (array) => {
    const companies = array.map((item) => {
        const size = item.incomes.length;
        const average = item.totalincome / size;

        return { ...item, averageincome: average };
    });

    return companies;
};

export default calculateAverageIncomes;
