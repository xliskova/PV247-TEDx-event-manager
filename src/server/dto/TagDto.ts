import { SpeakerBasicSchema } from "@/schemas/SpeakerSchemas";
import { TagBasicSchema } from "@/schemas/TagSchema";
import { z } from "zod";

export const TagUpdateSchema = TagBasicSchema.omit({id: true});
export const TagCreateSchema = TagBasicSchema.omit({id: true});
const TagUpdateDtoSchema = TagBasicSchema;

export type TagGetDto = z.infer<typeof TagBasicSchema>;
export type TagUpdateDto = z.infer<typeof TagUpdateDtoSchema>;
export type TagCreateDto = z.infer<typeof TagCreateSchema>;
export type TagCreatedDto = z.infer<typeof TagBasicSchema>;
export type TagDeletedDto = z.infer<typeof TagBasicSchema>;
