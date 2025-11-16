import { Request, Response } from 'express';
import { TranscriptionService } from '../services/transcription.service';


const service = new TranscriptionService();

// create Transcription
const createTranscription = async (req: Request, res: Response) => {
    try {
        const { audioUrl } = req.body;
        if (!audioUrl) return res.status(400).json({ error: 'audioUrl required' });


        const doc = await service.create(audioUrl);
        return res.status(201).json({ id: doc._id });
    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
};

// get all Transcriptions
const getAllTranscriptions = async (req: Request, res: Response) => {
    try {
        const list = await service.getAll();
        res.json(list);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch list" });
    }
};

export {
    createTranscription,
    getAllTranscriptions
};