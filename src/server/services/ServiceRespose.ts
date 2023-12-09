export enum ServiceStatusCode { 
    Ok,
    NotFound,
    Error
}

export type ServiceResponse<T> = {
    status : ServiceStatusCode,
    errorMessage?: string,
    data? : T
};