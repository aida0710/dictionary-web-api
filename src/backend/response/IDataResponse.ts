import {ResponseStatus} from '@/backend/response/ResponseStatus';

export interface IDataResponse {
    data: any;
    message: string;
    error: boolean;
    status: ResponseStatus;
}
