const connectToMongo = require("./db_connection");
require("dotenv").config(); //including dotenv package will help in loading environment data into process.env
connectToMongo(); //connection will take some time so will asynchronously go to next command till complete

//express basic code, below code can be found on http://localhost:${port}
const express= require("express");
var cors= require("cors");
const app= express();
const port= process.env.PORT || 4000;  //including port as 4000 is for out system environment but for hosting sites it could be something else which will pass using env var

app.use(cors()); //using cors for preventing cors errors
app.use(express.json())  //middle name added for using request.body (used in ./routes/author), now we can send data in json

//sample response for / page
// app.get("/",(req, res)=>{
//     res.json("Connection successful, Server started!!");
// })

//Available routes
app.use("/auth", require("./routes/auth"));  //setting route with endpoint /auth visible at http://localhost:${port}/auth
app.use("/notes", require("./routes/notes")); //setting route with endpoint /notes

app.listen(port, ()=>{
    console.log(`app backend listening at http://localhost:${port}`);
})