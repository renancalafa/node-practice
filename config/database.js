const mongoose = require('mongoose');

    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_CONNECTION);
    
    mongoose.connection.once("open", () => {
        console.log("DB Connected"); 
    });
    mongoose.connection.on("error", (error) => {
        console.log("DB Not Connected", error);
    });
