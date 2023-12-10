import { BlockCreateSchema } from "@/server/dto/BlockDto";
import { CreateBlock, GetBlocks } from "@/server/services/BlockService";
import { ServiceStatusCode } from "@/server/services/ServiceRespose";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const createBlockDto = await BlockCreateSchema.safeParseAsync(await req.json());

    if (createBlockDto.success) {
        const {status, errorMessage, data } = await CreateBlock(createBlockDto.data);
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
  
  const {status, errorMessage, data } = await GetBlocks();
  switch (status) {
      case ServiceStatusCode.Ok:
          return new Response(JSON.stringify(data), {status: 200});
      default:
          return new Response(errorMessage, {status: 500});
  }
};