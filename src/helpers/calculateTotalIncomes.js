const calculateTotalIncomes = (array) => {
    const companies = array.map((item) => {
        const sum = item.incomes.reduce((x, y) => {
            return x + parseInt(y.value, 10);
        }, 0);

        return { ...item, totalIncome: sum };
    });

    return companies;
};

export default calculateTotalIncomes;
