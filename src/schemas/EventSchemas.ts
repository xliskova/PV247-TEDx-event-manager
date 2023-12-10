import { z } from "zod";
import { SpeakerBasicSchema } from "./SpeakerSchemas";
import { EventType } from "@/eventType";
import { TagBasicSchema } from "./TagSchema";

export const EventBasicSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    eventType: z.string(),
    startTime: z.coerce.date(),
    endTime: z.coerce.date(),
    // blockId: z.number(),
    // speakerId: z.number(),
    // tags: z.array(TagBasicSchema)
});

export type EventBasic = z.infer<typeof EventBasicSchema>;

