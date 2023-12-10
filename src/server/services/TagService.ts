import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../db"
import { ServiceResponse, ServiceStatusCode } from "./ServiceRespose";
import { Tag } from "@prisma/client";
import { TagCreateDto, TagCreatedDto, TagDeletedDto, TagGetDto, TagUpdateDto } from "../dto/TagDto";
import { TagColor } from "@/schemas/TagSchema";

const UKNOWN_ERROR = { status: ServiceStatusCode.Error, errorMessage: "Unknown" };

export const MapDbTagToTagGetDto = (tag: Tag) : TagGetDto => {
    return {
        id: tag.id,
        title: tag.title,
        color: tag.color as TagColor
    }
};

const MapDbTagToTagCreatedDto = MapDbTagToTagGetDto;
const MapDbTagToTagUpdateDto = MapDbTagToTagGetDto;
const MapDbTagToTagDeletedDto = MapDbTagToTagGetDto;


export const GetTags = async () : Promise<ServiceResponse<TagGetDto[]>> =>  { 
    try {
        const dbData = await db.tag.findMany();
        return { status: ServiceStatusCode.Ok, data: dbData.map(t => MapDbTagToTagGetDto(t))};
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const GetTagById = async (id : number) : Promise<ServiceResponse<TagGetDto>> => {
    try { const found = await db.tag.findUnique({
            where: {
                id: id
            }
        })
    
        if (found) {
            return {status: ServiceStatusCode.Ok, data: MapDbTagToTagGetDto(found)};
        }
        return {status: ServiceStatusCode.NotFound, errorMessage: `The tag with id ${id} was not found`};
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const CreateTag = async (tagCreateDto : TagCreateDto) : Promise<ServiceResponse<TagCreatedDto>> => {
    try {
        const createdTag = await db.tag.create({
            data: {
                ...tagCreateDto
            }
        });
        return { status: ServiceStatusCode.Ok, data: MapDbTagToTagCreatedDto(createdTag)};    
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const UpdateTag = async (tagUpdateDto : TagUpdateDto) : Promise<ServiceResponse<TagUpdateDto>> => {
    try {
        const updatedTag = await db.tag.update({
            where: {
                id: tagUpdateDto.id
            },
            data: {
                ...tagUpdateDto
            }
        });
        return {status: ServiceStatusCode.Ok, data: MapDbTagToTagUpdateDto(updatedTag)}
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === "P2001") {
                return {status: ServiceStatusCode.NotFound, errorMessage: `The tag with id ${tagUpdateDto.id} was not found`}
            }
        }

        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const DeleteTagById = async (id : number) : Promise<ServiceResponse<TagDeletedDto>> => { 
    try {
        const deleted = await db.tag.delete({
        where: {
            id: id
        }
        });
        return {status: ServiceStatusCode.Ok, data: MapDbTagToTagDeletedDto(deleted)};
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === "P2001") {
                return {status: ServiceStatusCode.NotFound, errorMessage: `The tag with id ${id} was not found`}
            }
        }
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}