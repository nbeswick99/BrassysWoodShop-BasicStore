import {connect} from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
const URI = process.env.URI

const DbConnect = async () => {
    try {
        await connect(URI, {
            dbName: 'brassyDB'
        });
    console.log('Pinged MONGO: brassyDB')
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export default DbConnect