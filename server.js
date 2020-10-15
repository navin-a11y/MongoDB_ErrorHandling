const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: './config.env'});
const app = require('./app');

const mongouri = "mongodb+srv://Navin_2701:root@cluster0.d0wqh.mongodb.net/test";

mongoose.connect(mongouri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.on("connection", () =>{
    console.log("Database connected successfully");
});

mongoose.connection.on("error", (error) => {
    console.log("Database is not connected");
});

app.listen(process.env.PORT);
console.log(`App is running on port ${process.env.PORT}`);