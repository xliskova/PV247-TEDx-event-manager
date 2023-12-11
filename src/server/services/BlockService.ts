import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../db"
import { BlockCreateDto, BlockCreatedDto, BlockDeletedDto, BlockGetDto, BlockUpdateDto } from "../dto/BlockDto";
import { ServiceResponse, ServiceStatusCode } from "./ServiceRespose";

const UKNOWN_ERROR = { status: ServiceStatusCode.Error, errorMessage: "Unknown" };

export const GetBlocks = async () : Promise<ServiceResponse<BlockGetDto[]>> =>  { 
    try {
        return { status: ServiceStatusCode.Ok, data: await db.block.findMany({
            include: {events: true}
        })};
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    } 
}

export const GetBlockById = async (id : number) : Promise<ServiceResponse<BlockGetDto>> => {
    try { const found = await db.block.findUnique({
            where: {
                id: id
            }
        })
    
        if (found) {
            return {status: ServiceStatusCode.Ok, data: found};
        }
        return {status: ServiceStatusCode.NotFound, errorMessage: `The block with id ${id} was not found`};
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const CreateBlock = async (createBlockDto : BlockCreateDto) : Promise<ServiceResponse<BlockCreatedDto>> => {
    try {
        const createdBlock = await db.block.create({
            data: {
                title: createBlockDto.title
            }
        });
        return { status: ServiceStatusCode.Ok, data: createdBlock};    
    } catch (e) {
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const UpdateBlock = async (updateBlockDto : BlockUpdateDto) : Promise<ServiceResponse<BlockUpdateDto>> => {
    try {
        const updatedBlock = await db.block.update({
            where: {
                id: updateBlockDto.id
            },
            data: {
                title: updateBlockDto.title
            }
        });
        return {status: ServiceStatusCode.Ok, data: updatedBlock}
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === "P2001") {
                return {status: ServiceStatusCode.NotFound, errorMessage: `The block with id ${updateBlockDto.id} was not found`}
            }
        }

        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}

export const DeleteBlockById = async (id : number) : Promise<ServiceResponse<BlockDeletedDto>>=> { 
    try {
        const deleted = await db.block.delete({
        where: {
            id: id
        }
        });
        return {status: ServiceStatusCode.Ok, data: deleted};
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === "P2001") {
                return {status: ServiceStatusCode.NotFound, errorMessage: `The block with id ${id} was not found`}
            }
        }
        if (e instanceof Error) {
            return {status: ServiceStatusCode.Error, errorMessage: e.message};
        }
        return UKNOWN_ERROR;
    }
}