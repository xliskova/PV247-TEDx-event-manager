import Image from "next/image";
import { z } from "zod";
import { EventBasicSchema } from "./EventSchemas";

export const SpeakerBasicSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    // add image?
});

export const SpeakerWithEventsSchema = SpeakerBasicSchema.extend({
    events: z.array(EventBasicSchema)
})

export type SpeakerBasic = z.infer<typeof SpeakerBasicSchema>;
export type SpeakerWithEvents = z.infer<typeof SpeakerWithEventsSchema>;
