import axios from 'axios';

const fetchCompaniesValues = async (id, apiUrl) => {
    const url = `${apiUrl}/${id}`;

    try {
        const fetchedData = await axios.get(url);
        return fetchedData.data;
    } catch (e) {
        throw new Error(e);
    }
};

export default fetchCompaniesValues;
