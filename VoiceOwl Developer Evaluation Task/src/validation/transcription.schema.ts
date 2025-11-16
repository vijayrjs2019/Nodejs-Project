import Joi from "joi";

export const transcriptionSchema = Joi.object({
    audioUrl: Joi.string().uri().required(),
});