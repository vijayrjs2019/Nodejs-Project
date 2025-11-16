export interface CreateTranscriptionRequest {
    audioUrl: string;
}

export interface TranscriptionDocument {
    _id: string;
    audioUrl: string;
    transcription: string;
    createdAt: Date;
}