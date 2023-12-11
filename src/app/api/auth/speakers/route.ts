import { SpeakerCreateSchema } from "@/server/dto/SpeakerDto";
import { ServiceStatusCode } from "@/server/services/ServiceRespose";
import { CreateSpeaker, GetSpeakers } from "@/server/services/SpeakerService";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const reqData = await req.formData();
    const data = {
        name: reqData.get("name"),
        description: reqData.get("description"),
        image: reqData.get("image")
    }
    
    const speakerCreateDto = await SpeakerCreateSchema.safeParseAsync(data);

    if (speakerCreateDto.success) {
        const {status, errorMessage, data } = await CreateSpeaker(speakerCreateDto.data);
        switch (status) {
            case ServiceStatusCode.Ok:
                return new Response(JSON.stringify(data), {status: 201});
            default:
                return new Response(errorMessage, {status: 500});
        }
    } else {
        return new Response("Bad request:" + speakerCreateDto.error, {status: 400});
    }
};

export const GET = async (req: NextRequest) => {
  
  const {status, errorMessage, data } = await GetSpeakers();
  switch (status) {
      case ServiceStatusCode.Ok:
          return new Response(JSON.stringify(data), {status: 200});
      default:
          return new Response(errorMessage, {status: 500});
  }
};