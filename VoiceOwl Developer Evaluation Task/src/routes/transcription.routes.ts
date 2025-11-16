import { Router } from 'express';
import { createTranscription , getAllTranscriptions } from '../controllers/transcription.controller';
import { validate } from "../middleware/validate";
import { transcriptionSchema } from "../validation/transcription.schema";


const router = Router();
router.post("/", validate(transcriptionSchema), createTranscription);
router.get("/all-transcriptions", getAllTranscriptions);
export default router;