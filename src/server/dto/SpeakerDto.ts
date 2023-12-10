import { SpeakerBasicSchema } from "@/schemas/SpeakerSchemas";
import { z } from "zod";

export const SpeakerUpdateSchema = SpeakerBasicSchema.extend({image: z.any()});
export const SpeakerCreateSchema = SpeakerUpdateSchema.omit({id: true});
const SpeakerGetSchema = SpeakerBasicSchema.extend({url: z.string().nullable()})

export type SpeakerGetDto = z.infer<typeof SpeakerGetSchema>;
export type SpeakerUpdateDto = z.infer<typeof SpeakerUpdateSchema>;
export type SpeakerCreateDto = { name: string, description: string, image?: Blob };
export type SpeakerCreatedDto = z.infer<typeof SpeakerGetSchema>;
export type SpeakerDeletedDto = z.infer<typeof SpeakerGetSchema>;

export type ImageDto = {url: string};