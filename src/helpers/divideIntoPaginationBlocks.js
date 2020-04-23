const divideIntoPaginationBlocks = (array) => {
    const blocks = [];
    const pages = Math.ceil(array.length / 10);

    for (let i = 1; i <= pages; i++) {
        const singlePage = array.slice((i - 1) * 10, i * 10);
        blocks.push(singlePage);
    }

    return blocks;
};

export default divideIntoPaginationBlocks;
