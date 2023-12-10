import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../db"
import { ServiceResponse, ServiceStatusCode } from "./ServiceRespose";
import { SpeakerCreateDto, SpeakerCreatedDto, SpeakerDeletedDto, SpeakerGetDto, SpeakerUpdateDto } from "../dto/SpeakerDto";

const UKNOWN_ERROR = { status: ServiceStatusCode.Error, errorMessage: "Unknown" };

export const GetSpeakers = async () : Promise<ServiceResponse<SpeakerGetDto[]>> =>  { 
    try {
        const dbData = await db.speaker.findMany();
        return { status: ServiceStatusCode.Ok, data: dbData};
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const GetSpeakerById = async (id : number) : Promise<ServiceResponse<SpeakerGetDto>> => {
    try { const found = await db.speaker.findUnique({
            where: {
                id: id
            }
        })
    
        if (found) {
            return {status: ServiceStatusCode.Ok, data: found};
        }
        return {status: ServiceStatusCode.NotFound, errorMessage: `The speaker with id ${id} was not found`};
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const CreateSpeaker = async (speakerCreateDto : SpeakerCreateDto) : Promise<ServiceResponse<SpeakerCreatedDto>> => {
    try {
        const createdSpeaker = await db.speaker.create({
            data: {
                ...speakerCreateDto
            }
        });
        return { status: ServiceStatusCode.Ok, data: createdSpeaker};    
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

// todo: UploadImageForSpeaker

export const UpdateSpeaker = async (speakerupdateDto : SpeakerUpdateDto) : Promise<ServiceResponse<SpeakerUpdateDto>> => {
    try {
        const updatedSpeaker = await db.speaker.update({
            where: {
                id: speakerupdateDto.id
            },
            data: {
                ...speakerupdateDto
            }
        });
        return {status: ServiceStatusCode.Ok, data: updatedSpeaker}
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === "P2001") {
                return {status: ServiceStatusCode.NotFound, errorMessage: `The speaker with id ${speakerupdateDto.id} was not found`}
            }
        }

        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const DeleteSpeakerById = async (id : number) : Promise<ServiceResponse<SpeakerDeletedDto>> => { 
    try {
        const deleted = await db.speaker.delete({
        where: {
            id: id
        }
        });
        return {status: ServiceStatusCode.Ok, data: deleted};
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === "P2001") {
                return {status: ServiceStatusCode.NotFound, errorMessage: `The speaker with id ${id} was not found`}
            }
        }
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}