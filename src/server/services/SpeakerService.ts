import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../db"
import { ServiceResponse, ServiceStatusCode } from "./ServiceRespose";
import { ImageDto, SpeakerCreateDto, SpeakerCreatedDto, SpeakerDeletedDto, SpeakerGetDto, SpeakerUpdateDto } from "../dto/SpeakerDto";
import { CloudinaryResponseSchema } from "../dto/CloudinaryResponse";

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
        let imageDto : ImageDto | undefined = undefined;
        if (speakerCreateDto.image) {
            const {status, errorMessage, data } = await UploadImage(speakerCreateDto.image);

            if (status != ServiceStatusCode.Ok) {
                return { status: status, errorMessage: errorMessage };
            }
            imageDto = data;
        }

        const createdSpeaker = await db.speaker.create({
            data: {
                name: speakerCreateDto.name,
                description: speakerCreateDto.description,
                url: imageDto?.url,
                signature: imageDto?.signature,
                publicId: imageDto?.public_id
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

export const UploadImage = async (image: Blob) : Promise<ServiceResponse<ImageDto>>=> {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "ewepdtcz");
    formData.append("api_key", "897691555549473");

    const response = await fetch("https://api.cloudinary.com/v1_1/dqgi0bdib/image/upload", {
        method: "POST",
        body: formData
    })

    const json = await response.json();
    const parsed = await CloudinaryResponseSchema.safeParseAsync(json);
    
    if (parsed.success) {
        return { status: ServiceStatusCode.Ok, data: {url: parsed.data.url, signature: parsed.data.signature, public_id: parsed.data.public_id} }
    } else {
        return { status: ServiceStatusCode.Error, errorMessage: parsed.error.toString() };
    }
}

export const UpdateSpeaker = async (speakerUpdateDto : SpeakerUpdateDto) : Promise<ServiceResponse<SpeakerUpdateDto>> => {
    try {
        let imageDto : ImageDto | undefined = undefined;
        if (speakerUpdateDto.image) {
            const {status, errorMessage, data } = await UploadImage(speakerUpdateDto.image);

            if (status != ServiceStatusCode.Ok) {
                return { status: status, errorMessage: errorMessage };
            }
            imageDto = data;
        }

        const updatedSpeaker = await db.speaker.update({
            where: {
                id: speakerUpdateDto.id
            },
            data: {
                description: speakerUpdateDto.description,
                name: speakerUpdateDto.name,
                signature: imageDto?.signature,
                url: imageDto?.url,
                publicId: imageDto?.public_id
            }
        });
        return {status: ServiceStatusCode.Ok, data: updatedSpeaker}
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === "P2001") {
                return {status: ServiceStatusCode.NotFound, errorMessage: `The speaker with id ${speakerUpdateDto.id} was not found`}
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