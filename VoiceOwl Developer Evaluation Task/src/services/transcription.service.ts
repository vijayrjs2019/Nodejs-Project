import axios from 'axios';
import { Transcription } from '../models/Transcription';


export class TranscriptionService {
    // mocked "download" with retry
    async downloadAudio(url: string, retries = 2): Promise<void> {
        try {
            // Simulate network check
            if (!url.startsWith("http")) {
                throw new Error("Invalid URL");
            }

            await new Promise(res => setTimeout(res, 300));
        } catch (err) {
            if (retries > 0) return this.downloadAudio(url, retries - 1);
            throw new Error('Failed to download audio.');
        }
    }


    async transcribe(url: string): Promise<string> {
        return `transcribed text for ${url}`;
    }


    async create(audioUrl: string) {
        await this.downloadAudio(audioUrl);
        const text = await this.transcribe(audioUrl);


        const doc = await Transcription.create({
            audioUrl,
            transcription: text
        });


        return doc;
    }

    async getAll() {
        return Transcription.find().sort({ createdAt: -1 });
    }
}