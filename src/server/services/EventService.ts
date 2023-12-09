import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../db"
import { ServiceResponse, ServiceStatusCode } from "./ServiceRespose";
import { EventCreateDto, EventCreatedDto, EventDeletedDto, EventGetDto, EventUpdateDto } from "../dto/EventDto";
import { EventType } from "@/eventType";
import { Event, Tag } from "@prisma/client";
import { MapDbTagToTagGetDto } from "./TagService";

const UKNOWN_ERROR = { status: ServiceStatusCode.Error, errorMessage: "Unknown" };

type EventWithTags = Event & { tags: Tag[] };

const MapDbEventToEventGetDto = (event : EventWithTags) : EventGetDto => {
    return {
        id: event.id,
        title: event.title,
        description: event.description,
        eventType: EventType[event.eventType as keyof typeof EventType],
        startTime: event.startTime,
        endTime: event.endTime,
        speakerId: event.speakerId,
        blockId: event.blockId,
        tags: event.tags.map(e => MapDbTagToTagGetDto(e))
    }
};

const MapDbEventToEventCreatedDto = MapDbEventToEventGetDto;
const MapDbEventToEventUpdateDto = MapDbEventToEventGetDto;

const MapDbEventToEventDeletedDto = (event : Event) : EventDeletedDto => {
    return {
        id: event.id,
        title: event.title,
        description: event.description,
        eventType: EventType[event.eventType as keyof typeof EventType],
        startTime: event.startTime,
        endTime: event.endTime,
        speakerId: event.speakerId,
        blockId: event.blockId
    }
};


export const GetEvents = async () : Promise<ServiceResponse<EventGetDto[]>> =>  { 
    try {
        const dbData = await db.event.findMany({
                include: { tags: true }
            }
        );
        const mappedData = dbData.map(e => MapDbEventToEventGetDto(e))
        return { status: ServiceStatusCode.Ok, data: mappedData};
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    } 
}

export const GetEventById = async (id : number) : Promise<ServiceResponse<EventGetDto>> => {
    try { const found = await db.event.findUnique({
            where: {
                id: id
            },
            include: { tags: true }
        })
    
        if (found) {
            return {status: ServiceStatusCode.Ok, data: MapDbEventToEventGetDto(found)};
        }
        return {status: ServiceStatusCode.NotFound, errorMessage: `The block with id ${id} was not found`};
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const CreateEvent = async (eventCreateDto : EventCreateDto) : Promise<ServiceResponse<EventCreatedDto>> => {
    try {
        const createdEvent = await db.event.create({
            data: {
                title: eventCreateDto.title,
                description: eventCreateDto.description,
                eventType: eventCreateDto.eventType,
                startTime: eventCreateDto.startTime,
                endTime: eventCreateDto.endTime,
                speakerId: eventCreateDto.speakerId,
                blockId: eventCreateDto.blockId,
                tags: {
                    connect: eventCreateDto.tags
                }
            },
            include: { tags: true }
        });
        return { status: ServiceStatusCode.Ok, data: MapDbEventToEventCreatedDto(createdEvent)};    
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const UpdateEvent = async (eventUpdateDto : EventUpdateDto) : Promise<ServiceResponse<EventUpdateDto>> => {
    try {
        const updatedEvent = await db.event.update({
            where: {
                id: eventUpdateDto.id
            },
            data: {
                title: eventUpdateDto.title,
                description: eventUpdateDto.description,
                eventType: eventUpdateDto.eventType,
                startTime: eventUpdateDto.startTime,
                endTime: eventUpdateDto.endTime,
                speakerId: eventUpdateDto.speakerId,
                blockId: eventUpdateDto.blockId,
                tags: {
                    connect: eventUpdateDto.tags
                }
            },
            include: { tags: true }
        });
        return {status: ServiceStatusCode.Ok, data: MapDbEventToEventUpdateDto(updatedEvent)}
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === "P2001") {
                return {status: ServiceStatusCode.NotFound, errorMessage: `The event with id ${eventUpdateDto.id} was not found`}
            }
        }

        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const DeleteEventById = async (id : number) : Promise<ServiceResponse<EventDeletedDto>> => { 
    try {
        const deleted = await db.event.delete({
        where: {
            id: id
        }
        });
        return {status: ServiceStatusCode.Ok, data: MapDbEventToEventDeletedDto(deleted)};
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === "P2001") {
                return {status: ServiceStatusCode.NotFound, errorMessage: `The event with id ${id} was not found`}
            }
        }
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}