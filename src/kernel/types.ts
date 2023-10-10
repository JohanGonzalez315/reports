export type Entity<ID extends number | string> = {
    id: ID
}

export type TPagination = {
    filter: string,
    page?:number,
    limit?: number,
    sortBy?: string,
    totalPages?: number,
    sort?: string,
    total?: number,
    offset?: number
}

export enum Errors {
    BAD_REQUEST= 'BadRequest',
    UNAUTHORIZED='Unauthorized' ,
    FORBIDDEN ='Forbidden ',
    NOT_DATA_FOUND = 'NoDataFound',
    INTERNAL_SERVER_ERROR = 'InternalServerError',
    MISSING_FIELDS = 'MissingField',
    RECORD_NOT_REGISTERED = 'RecordNotRegistered'
}

export type TStatus = Entity<number> & {
    description?: string
}

export type TJson = {
    [x: string]:any;
}

export type TJsonArray = TJson[]