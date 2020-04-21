const calculateLastMonthIncome = (array) => {
    const companies = array.map((item) => {
        const monthIncome = item.incomes.reduce((x, y) => {
            let isNotEmpty = true;
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth() + 1;
            const year = new Date(y.date).getFullYear();
            const month = new Date(y.date).getMonth();

            if (
                parseInt(month, 10) === parseInt(currentMonth, 10) &&
                parseInt(currentYear, 10) === parseInt(year, 10)
            ) {
                isNotEmpty = false;
                return x + parseInt(y.value, 10);
            } else if (isNotEmpty) {
                return ' - ';
            }
        });

        return { ...item, monthIncome: monthIncome };
    });

    return companies;
};

export default calculateLastMonthIncome;
