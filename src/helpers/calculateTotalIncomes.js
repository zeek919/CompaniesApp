const calculateTotalIncomes = (array) => {
    const a = array.map((item) => {
        const sum = item.incomes.reduce((x, y) => {
            // console.log(x);
            return x + parseInt(y.value, 10);
        }, 0);

        // console.log(sum);
        return { ...item, totalIncome: sum };
    });

    return a;
};

export default calculateTotalIncomes;
