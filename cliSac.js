export { parseCli };


const parseCli = function() {
    const outPut = {};
    const cliInputs = process.argv.slice(2); // command line inputs
    cliInputs.forEach(function (pair) {
        const split = pair.split(`=`);
        if (split.length === 2) {
            const [key, value] = split;
            outPut[key] = value
        }
    });

    return outPut
};
