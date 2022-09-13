const asyncCatch = ( asyncController ) => {
    return async (req, res, next) => {
        try {
            await asyncController(req, res);
        } catch (err){
            next(err);
        }
    }
};

module.exports = {
    asyncCatch
}