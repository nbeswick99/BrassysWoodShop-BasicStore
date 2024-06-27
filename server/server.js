import express from 'express';
import cors from 'cors';
import dotenv from'dotenv';
import DbConnect from './config/mongoose.config.js'
import router from './routes/listings.routes.js'

dotenv.config();

const app = express();

app.use(express.json(), cors())
app.use('/api', router);
const PORT = process.env.PORT

DbConnect();

app.listen(PORT, ()=> console.log(`listening on PORT: ${PORT}`))