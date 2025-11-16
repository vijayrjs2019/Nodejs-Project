import express from 'express';
import transcriptionRoutes from './routes/transcription.routes';


const app = express();
app.use(express.json());
app.use('/transcription', transcriptionRoutes);


export default app;