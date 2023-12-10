import { EventCreateSchema } from "@/server/dto/EventDto";
import { CreateEvent, GetEvents } from "@/server/services/EventService";
import { ServiceStatusCode } from "@/server/services/ServiceRespose";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const eventCreateDto = await EventCreateSchema.safeParseAsync(await req.json());

    if (eventCreateDto.success) {
        const {status, errorMessage, data } = await CreateEvent(eventCreateDto.data);
        switch (status) {
            case ServiceStatusCode.Ok:
                return new Response(JSON.stringify(data), {status: 201});
            default:
                return new Response(errorMessage, {status: 500});
        }
    } else {
        return new Response(`Bad request, body: ${await req.json()}`, {status: 400});
    }
};

export const GET = async (req: NextRequest) => {
  
  const {status, errorMessage, data } = await GetEvents();
  switch (status) {
      case ServiceStatusCode.Ok:
          return new Response(JSON.stringify(data), {status: 200});
      default:
          return new Response(errorMessage, {status: 500});
  }
};