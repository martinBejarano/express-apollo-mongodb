import { connect } from "mongoose";

const connectDB = async () => {
    try {
        await connect('mongodb://localhost/webstore');
        console.log('Succesfully connected to MongoDB');
    } catch {
        console.log('There was an error while trying to connect to DB');
    }
};

export default connectDB;