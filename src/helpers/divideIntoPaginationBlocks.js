const divideIntoPaginationBlocks = (array) => {
    const blocks = [];
    const pages = array.length / 10;
    for (let i = 1; i <= pages; i++) {
        blocks.push(array.slice((i - 1) * 10, i * 10));
    }

    return blocks;
};

export default divideIntoPaginationBlocks;
