const calculateTotalIncomes = (array) => {
    array.map((item) => {
        const a = item.incomes.map((incomes) => {
            let sum = 0;
            sum += parseInt(incomes.value, 10);
            return sum;
        });

        return { ...item, a };
    });
};

export default calculateTotalIncomes;
