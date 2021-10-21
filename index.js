//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import route from "./routes/index.js";
//import cors
import cors from "cors";
// import axios
import axios from "axios";
// construct express function
const app = express();
// Set port
const PORT = 3001;
// Set database Name
const dbName = "major_db";
// connect ke database mongoDB
mongoose.connect(`mongodb://localhost:27017/${dbName}`,{ 
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));
 
// middleware 
app.use(cors());
app.use(express.json());
app.use('/major', route);

// fetch api
axios.get("http://localhost:3001/major")
  .then((res => {
    console.log(res.data[2]);
  }))

// listening to port
app.listen(PORT,()=> console.log(`Server Running at http://localhost:${PORT}`));