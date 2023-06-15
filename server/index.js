import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';


const app = express();
dotenv.config();

//Setup of the body parser so that we can send our requests for e.g: image and imageUrl
app.use(bodyParser.json({
    limit: "40mb",
    extended: true
}))

app.use(bodyParser.urlencoded({
    limit: "40mb",
    extended: true
}))

// To initialise cors and call it as a function
app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
// Setup/Connection for Mongodb cloud database using Atlas to create cluster
// Connect Server Application to the datatbase https://www.mongodb.com/cloud/atlas

//const CONNECTION_URL = 'mongodb+srv://srhmernproject:Teamred12345@cluster0.y8eulcd.mongodb.net/?retryWrites=true&w=majority'; //In real Application the creditials should be secured so we will later change this and store this in the environment variables for security reasons. 
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) //We have set to true to avoid the warnings and errors in the console.
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT} and Connection to the Database Successfull :)`))) //Using .then async function to return a promise i.e success message if server is running successfully
    .catch((error) => console.log(error.message)); //to catch error if server is not running properly.