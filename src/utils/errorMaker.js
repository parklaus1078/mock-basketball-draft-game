const errorMaker = (errMsg, code) => {
    const err = new Error(errMsg);
    err.statusCode = code;
    return err;
};

module.exports = {
    errorMaker
}