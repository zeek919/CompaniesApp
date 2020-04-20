const calculateTotalIncomes = (array) => {
    const a = array.map((item) => {
        const sum = item.incomes.reduce((x, y) => {
            return x + parseInt(y.value, 10);
        }, 0);

        return { ...item, totalIncome: sum };
    });

    return a;
};

export default calculateTotalIncomes;
