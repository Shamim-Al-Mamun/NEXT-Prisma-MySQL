import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        });
        console.log(`Connected to MongoDB... ${mongoose.connection.host}`);
    }
    catch(err){
        console.log(`DB Error ${err}`);
    }
}

export {connectDB};
// module.exports = connectDB;