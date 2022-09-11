const dotenv = require("dotenv");
dotenv.config();

const { createApp } = require("./app");
const { appDataSource } = require("./src/utils/dataSource");

const start = async () => {
    try {
        const PORT = process.env.PORT;
        const app = createApp();

        appDataSource.initialize()
            .then(() => {
                console.log("Data Source has been initialized!");
            })
            .catch((err) => {
                console.log("Error occured during Data source initialization");
                appDataSource.destroy();
            });
        
        app.get("/ping", (req, res, next) => {
            res.status(200).json({message: "pong"});
        });

        app.listen(PORT, () => {
            console.log(`listening on PORT: ${PORT}`)
        });
    } catch (err) {
        console.log(err);
    }
};

start();