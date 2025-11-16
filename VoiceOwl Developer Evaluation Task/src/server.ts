import mongoose from 'mongoose';
import app from './app';
import { ENV } from './config/env';


mongoose.connect(ENV.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(ENV.PORT, () => console.log(`Server running on ${ENV.PORT}`));
});