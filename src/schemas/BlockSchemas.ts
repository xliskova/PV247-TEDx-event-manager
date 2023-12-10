import { z } from "zod";
import { EventBasicSchema } from "./EventSchemas";

export const BlockBasicSchema = z.object({
    id : z.number(),
    title: z.string()
});

export const BlockWithEventsSchema = BlockBasicSchema.extend({
    events: z.array(EventBasicSchema)
})

export type BlockBasic = z.infer<typeof BlockBasicSchema>;
export type BlockWithEvents = z.infer<typeof BlockWithEventsSchema>;