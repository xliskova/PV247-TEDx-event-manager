import { z } from "zod";
import { EventBasicSchema } from "./EventSchemas";

export const SpeakerBasicSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string()
    // add image?
});

export type SpeakerBasic = z.infer<typeof SpeakerBasicSchema>;
