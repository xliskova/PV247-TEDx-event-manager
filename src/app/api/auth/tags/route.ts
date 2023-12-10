import { TagCreateSchema } from "@/server/dto/TagDto";
import { ServiceStatusCode } from "@/server/services/ServiceRespose";
import { CreateTag, GetTags } from "@/server/services/TagService";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const tagCreateDto = await TagCreateSchema.safeParseAsync(await req.json());

    if (tagCreateDto.success) {
        const {status, errorMessage, data } = await CreateTag(tagCreateDto.data);
        switch (status) {
            case ServiceStatusCode.Ok:
                return new Response(JSON.stringify(data), {status: 201});
            default:
                return new Response(errorMessage, {status: 500});
        }
    } else {
        return new Response("Bad request", {status: 400});
    }
};

export const GET = async (req: NextRequest) => {
  
  const {status, errorMessage, data } = await GetTags();
  switch (status) {
      case ServiceStatusCode.Ok:
          return new Response(JSON.stringify(data), {status: 200});
      default:
          return new Response(errorMessage, {status: 500});
  }
};