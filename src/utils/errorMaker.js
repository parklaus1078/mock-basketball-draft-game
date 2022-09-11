const errorMaker = (errMsg, code) => {
    if (typeof(errMsg) == 'String' || typeof(code) != 'Number' ) {
        const typeErr = new Error("ERROR_MAKER_INPUT_ERROR");
        typeErr.statusCode = 500;
        throw typeErr;
    };

    const err = new Error(errMsg);
    err.statusCode = code;
    throw err;
};

module.exports = {
    errorMaker
}