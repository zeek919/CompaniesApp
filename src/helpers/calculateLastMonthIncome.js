const calculateLastMonthIncome = (array) => {
    const companies = array.map((item) => {
        const monthIncome = item.incomes.reduce((x, y) => {
            let isNotEmpty = true;
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth() + 1;
            const dataYear = new Date(y.date).getFullYear();
            const dataMonth = new Date(y.date).getMonth();

            if (
                parseInt(dataMonth, 10) === parseInt(currentMonth, 10) &&
                parseInt(currentYear, 10) === parseInt(dataYear, 10)
            ) {
                isNotEmpty = false;
                return x + parseInt(y.value, 10);
            }

            if (isNotEmpty) {
                return ' - ';
            }
        });

        return { ...item, lastmonthincome: monthIncome };
    });

    return companies;
};

export default calculateLastMonthIncome;
