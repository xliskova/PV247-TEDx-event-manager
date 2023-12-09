import { EventBasicSchema } from "@/schemas/EventSchemas";
import { z } from "zod";

export const EventUpdateSchema = EventBasicSchema.omit({id: true});
export const EventCreateSchema = EventBasicSchema.omit({id: true});
const EventUpdateDtoSchema = EventBasicSchema;
const EventDeletedDtoSchema = EventBasicSchema.omit({tags: true})

export type EventGetDto = z.infer<typeof EventBasicSchema>;
export type EventUpdateDto = z.infer<typeof EventUpdateDtoSchema>;
export type EventCreateDto = z.infer<typeof EventCreateSchema>;
export type EventCreatedDto = z.infer<typeof EventBasicSchema>;
export type EventDeletedDto = z.infer<typeof EventDeletedDtoSchema>;
