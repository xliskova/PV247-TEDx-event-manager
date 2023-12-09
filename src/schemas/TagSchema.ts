import { z } from "zod";
import { EventBasicSchema } from "./EventSchemas";

export const TagColorSchema = z.enum(["default", 'primary', 'secondary', 'error', 'info', 'success', 'warning']);

export const TagBasicSchema = z.object({
    id: z.number(),
    title: z.string(),
    color: TagColorSchema
});

export type TagBasic = z.infer<typeof TagBasicSchema>;
export type TagColor = z.infer<typeof TagColorSchema>
