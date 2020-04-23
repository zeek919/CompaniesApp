# companies-react-app

## Setup

```
git clone https://github.com/zeek919/CompaniesApp

cd CompaniesApp

npm install

npm run start
```

## Components

### Root

Is using for fetching data on **componentDidMount()**, and putting them on state.

```
const companies = await axios.get(COMPANIES_API_URL);

            const APIData = await Promise.all(
                companies.data.map(async (item) => {
                    const fetchedCompaniesValues = await fetchCompaniesValues(
                        item.id,
                        INCOMES_API_URL
                    );

                    return {
                        ...item,
                        ...fetchedCompaniesValues,
                    };
                })
            );
```

Except this, data are edited. Functions _(that are described below)_ add to them some other fields like: **Total Income**, **Average Income**, **Last month income**.

### Table

The main task of _Table_ is to render table with downloaded values, pagination and input to filter data. _Table_ has some function that above components are using.

```
Table.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
};
```

**data** - array of combined objects maked in Root component.
**headers** - array of header that function render in table.

Components method:

**setBasicValue( sortedItems )** - Is getting arrays, divided to 10 element blocks, and setting them in state

**handleSort( tagName )** - Is getting tag name who is one of the table headers, check order that we want to get and sort data.

**handleSortImage( elementName )** - Is checking current order of sorting and return appropriate image.

**filterHandler( e )** - Is getting value from _Input_, using _filterPharse()_ to return only desirable data and setting them on state.

### TableHeader

Returns header of table

```
TableHeader = (headersArray, sortHandler, sortImageHandler)

...

TableHeader.propTypes = {
    headersArray: PropTypes.array.isRequired,
    sortHandler: PropTypes.func.isRequired,
    sortImageHandler: PropTypes.func,
};

TableHeader.defaultProps = {
    sortImageHandler: () => '',
};
```

Props:
**headerArray** - array of headers.
**sortHandler** - sort method.
**sortImageHandler** - method retruns image of sort order

### TableRecords

Returns records of table

```
TableRecord = (items)

...

TableRecord.propTypes = {
    items: PropTypes.array.isRequired,
};
```

**item** - array of objects. Theres need to contain properly fields (id, name, city, totalIncome, averageIncome, lastMonthIncome)

### Pagination

Return block of pagination buttons

```
Pagination = ({ blocksToPaginate, onClick })

...

Pagination.propTypes = {
    blocksToPaginate: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};
```

**blocksToPaginate** - array of divided objects.
**onClick** - function returning only watched page

## Input

Return Input

```
Input = ({ placeholder, onChange })

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
```

**placeholder** - text inside of input.
**onChange** - function returns value of input

### Header

Returns div with title.

```
Header = ({ title })

...

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
```

## Helpers

### calculateAverageIncomes(arrayWithTotalIncomeValue)

Returns array of object with added "averageIncome" field who's calculated from total income field

**arrayWithTotalIncomeValue** - elements of array need to contain "totalIncome" field.

### calculateLastMonthIncome(arrayWithIncomesData)

Returns array of objects with added "lastMonthIncome" field who's calculated "incomes" array. Function is checking given dates, cut them into separate field like _month_ and _year_, and checking sum of the last month values. If no one of them are from last month, function return " - "

**arrayWithIncomesData** - elements of array need to contain "incomes" array.

### calculateTotalIncomes(arrayWithIncomesData)

Returns array of objects with added "totalIncome" field who's sum of whole incomes values.

**arrayWithIncmoesData** - elements of array need to contain "incomes" array.

### divideIntoPaginationBlocks(arrayToDivide)

Return array of arrays divided to blocks on 10 elements.

**arrayToDivide** - array, none of special requirments.

### async fetchCompaniesValues(id, apiUrl)

Returns fetched data

**id** - number added at the end of url.
**apiURL** - link to API

### selectionSortAscending = (arrayToSort, value)

### selectionSortDescending = (arrayToSort, value)

Selection sort alghotitms

**value** - field by which the table should be sorted
