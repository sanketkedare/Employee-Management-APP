const connectToDB = require("./Model/ConnectToDB.js");
const app = require("./app.js"); // Creating Server
const port = 3001;




//Connecting to DB;
connectToDB();

app.listen(port, () => 
{
  console.log(`App Listing on port ${port}`);
});
