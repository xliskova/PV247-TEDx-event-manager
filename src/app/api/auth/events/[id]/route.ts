import { EventUpdateSchema } from "@/server/dto/EventDto";
import { DeleteEventById, GetEventById, UpdateEvent } from "@/server/services/EventService";
import { ServiceStatusCode } from "@/server/services/ServiceRespose";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest, { params } : {params : Params}) => {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
        return new Response("Id is not number", {status: 400})
    }

    const {status, errorMessage, data } = await GetEventById(id);
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
    const eventUpdateDto = await EventUpdateSchema.safeParseAsync(await req.json());

    if (eventUpdateDto.success) {
        const {status, errorMessage, data } = await UpdateEvent({...eventUpdateDto.data, id: id});
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

    const {status, errorMessage, data } = await DeleteEventById(id);

    switch (status) {
        case ServiceStatusCode.Ok:
            return new Response(JSON.stringify(data), {status: 201});
        case ServiceStatusCode.NotFound:
            return new Response(errorMessage, {status: 404});
        default:
            return new Response(errorMessage, {status: 500});
    }
};