import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// importing the routes here
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts',postRoutes);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// the below is the connection url for our connection with the mongodb atlas cluster with the user that we have created
// this thing needs to be private and we will do the same before the full fledged post of the alpha/beta channel
const CONNECTION_URL = "mongodb+srv://testuser01:<pass>.00@isthis-a-bug.70aj2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , {useNewUrlParser: true ,useUnifiedTopology:true})
                  .then(() => app.listen(PORT, () => console.log(`Server is up and running on the port: ${PORT}`)))
                  .catch((error) => console.log(error.message));

// the below is depricated and no loger necessary ?
// https://stackoverflow.com/questions/69030963/error-usefindandmodify-is-an-invalid-option
// mongoose.set('useFindAndModify',false);
