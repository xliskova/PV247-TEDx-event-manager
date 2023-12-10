import { BlockUpdateSchema } from "@/server/dto/BlockDto";
import { DeleteBlockById, GetBlockById, UpdateBlock } from "@/server/services/BlockService";
import { ServiceStatusCode } from "@/server/services/ServiceRespose";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest, { params } : {params : Params}) => {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
        return new Response("Id is not number", {status: 400})
    }

    const {status, errorMessage, data } = await GetBlockById(id);
    switch (status) {
        case ServiceStatusCode.Ok:
            return new Response(JSON.stringify(data), {status: 201});
        case ServiceStatusCode.NotFound:
            return new Response(errorMessage, {status: 404});
        default:
            return new Response(errorMessage, {status: 500});
    }
};

export const PUT = async (req: NextRequest, { params } : { params : Params }) => {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
        return new Response("Id is not number", {status: 400})
    }
    const blockUpdateDto = await BlockUpdateSchema.safeParseAsync(await req.json());

    if (blockUpdateDto.success) {
        const {status, errorMessage, data } = await UpdateBlock({...blockUpdateDto.data, id: id});
        switch (status) {
            case ServiceStatusCode.Ok:
                return new Response(JSON.stringify(data), {status: 201});
            case ServiceStatusCode.NotFound:
                return new Response(errorMessage, {status: 404});
            default:
                return new Response(errorMessage, {status: 500});
        }
    } else {
        return new Response("Bad request", {status: 400});
    }
};

export const DELETE = async (req: NextRequest, { params } : { params : Params }) => {
    const id = Number(params.id);
    
    if (Number.isNaN(id)) {
        return new Response("Id is not number", {status: 400})
    }

    const {status, errorMessage, data } = await DeleteBlockById(id);

    switch (status) {
        case ServiceStatusCode.Ok:
            return new Response(JSON.stringify(data), {status: 201});
        case ServiceStatusCode.NotFound:
            return new Response(errorMessage, {status: 404});
        default:
            return new Response(errorMessage, {status: 500});
    }
};