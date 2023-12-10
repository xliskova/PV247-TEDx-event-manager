import { BlockBasicSchema } from "@/schemas/BlockSchemas";
import { z } from "zod";

export const BlockUpdateSchema = BlockBasicSchema.omit({id: true});
export const BlockCreateSchema = BlockBasicSchema.omit({id: true});
const BlockUpdateDtoSchema = BlockBasicSchema;

export type BlockGetDto = z.infer<typeof BlockBasicSchema>;
export type BlockUpdateDto = z.infer<typeof BlockUpdateDtoSchema>;
export type BlockCreateDto = z.infer<typeof BlockCreateSchema>;
export type BlockCreatedDto = z.infer<typeof BlockBasicSchema>;
export type BlockDeletedDto = z.infer<typeof BlockBasicSchema>;
