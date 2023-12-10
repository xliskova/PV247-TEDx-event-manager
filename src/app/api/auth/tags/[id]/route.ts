import { TagUpdateSchema } from "@/server/dto/TagDto";
import { ServiceStatusCode } from "@/server/services/ServiceRespose";
import { DeleteTagById, GetTagById, UpdateTag } from "@/server/services/TagService";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest, { params } : {params : Params}) => {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
        return new Response("Id is not number", {status: 400})
    }

    const {status, errorMessage, data } = await GetTagById(id);
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
    const tagUpdateDto = await TagUpdateSchema.safeParseAsync(await req.json());

    if (tagUpdateDto.success) {
        const {status, errorMessage, data } = await UpdateTag({...tagUpdateDto.data, id: id});
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

    const {status, errorMessage, data } = await DeleteTagById(id);

    switch (status) {
        case ServiceStatusCode.Ok:
            return new Response(JSON.stringify(data), {status: 201});
        case ServiceStatusCode.NotFound:
            return new Response(errorMessage, {status: 404});
        default:
            return new Response(errorMessage, {status: 500});
    }
};