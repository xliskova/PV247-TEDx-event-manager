import { z } from "zod";
import { SpeakerBasicSchema } from "./SpeakerSchemas";
import { EventType } from "@/eventType";
import { TagBasicSchema } from "./TagSchema";

export const EventBasicSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    eventType: z.nativeEnum(EventType),
    startTime: z.date(),
    endTime: z.date(),
    blockId: z.number(),
    speakerId: z.number(),
    tags: z.array(TagBasicSchema)
});

export const EventWithSpeakerSchema = EventBasicSchema.extend({
    speaker: SpeakerBasicSchema
});

export type EventBasic = z.infer<typeof EventBasicSchema>;
export type EventWithSpeaker = z.infer<typeof EventWithSpeakerSchema>;
