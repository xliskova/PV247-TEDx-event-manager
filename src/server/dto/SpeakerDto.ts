import { SpeakerBasicSchema } from "@/schemas/SpeakerSchemas";
import { z } from "zod";

export const SpeakerUpdateSchema = SpeakerBasicSchema.extend({image: z.any()});
export const SpeakerCreateSchema = SpeakerUpdateSchema.omit({id: true});

export type SpeakerGetDto = z.infer<typeof SpeakerBasicSchema>;
export type SpeakerUpdateDto = z.infer<typeof SpeakerUpdateSchema>;
export type SpeakerCreateDto = { name: string, description: string, image?: Blob };
export type SpeakerCreatedDto = z.infer<typeof SpeakerBasicSchema>;
export type SpeakerDeletedDto = z.infer<typeof SpeakerBasicSchema>;

export type ImageDto = {url: string, signature: string, public_id: string};