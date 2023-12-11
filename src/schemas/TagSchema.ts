import { z } from "zod";

export const TagBasicSchema = z.object({
    id: z.number(),
    title: z.string(),
    color: z.string() // add validation that it is proper #color
});

export type TagBasic = z.infer<typeof TagBasicSchema>;
