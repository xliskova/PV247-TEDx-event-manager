import { z } from "zod";

export const CloudinaryResponseSchema = z.object({
    url: z.string(),
    signature: z.string(),
    public_id: z.string()
});