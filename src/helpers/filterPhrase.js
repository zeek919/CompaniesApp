const filterPhrase = (arrayToFilter, searched) => {
    const modifiedSearched = searched.toLowerCase();
    const filteredData = arrayToFilter.filter((data) => {
        return (
            data.id.toString().toLowerCase().includes(modifiedSearched) ||
            data.name.toLowerCase().includes(modifiedSearched) ||
            data.city.toLowerCase().includes(modifiedSearched) ||
            data.totalincome
                .toString()
                .toLowerCase()
                .includes(modifiedSearched) ||
            data.averageincome
                .toString()
                .toLowerCase()
                .includes(modifiedSearched) ||
            data.lastmonthincome
                .toString()
                .toLowerCase()
                .includes(modifiedSearched)
        );
    });

    if (filteredData.length > 0) {
        return filteredData;
    }

    return [''];
};

export default filterPhrase;
