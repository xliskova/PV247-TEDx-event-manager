import { SpeakerBasicSchema } from "@/schemas/SpeakerSchemas";
import { z } from "zod";

export const SpeakerUpdateSchema = SpeakerBasicSchema.omit({id: true});
export const SpeakerCreateSchema = SpeakerBasicSchema.omit({id: true});
const SpeakerUpdateDtoSchema = SpeakerBasicSchema;

export type SpeakerGetDto = z.infer<typeof SpeakerBasicSchema>;
export type SpeakerUpdateDto = z.infer<typeof SpeakerUpdateDtoSchema>;
export type SpeakerCreateDto = z.infer<typeof SpeakerCreateSchema>;
export type SpeakerCreatedDto = z.infer<typeof SpeakerBasicSchema>;
export type SpeakerDeletedDto = z.infer<typeof SpeakerBasicSchema>;
