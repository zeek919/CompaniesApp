const calculateAverageIncomes = (array) => {
    const a = array.map((item) => {
        const size = item.incomes.length;
        const average = item.totalIncome / size;

        return { ...item, averageIncome: average };
    });

    return a;
};

export default calculateAverageIncomes;
