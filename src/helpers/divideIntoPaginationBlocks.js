const divideIntoPaginationBlocks = (arrayToDivide) => {
    const blocks = [];
    const pages = Math.ceil(arrayToDivide.length / 10);

    for (let i = 1; i <= pages; i++) {
        const singlePage = arrayToDivide.slice((i - 1) * 10, i * 10);
        blocks.push(singlePage);
    }

    return blocks;
};

export default divideIntoPaginationBlocks;
