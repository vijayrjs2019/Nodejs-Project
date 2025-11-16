import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    PORT: process.env.PORT || 8080,
    MONGO_URI: process.env.MONGO_URL    || 'mongodb://localhost:27017/transcriptions_db',
};