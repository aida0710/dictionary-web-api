import {ResponseStatus} from '@/backend/response/ResponseStatus';
import {IDataResponse} from '@/backend/response/IDataResponse';

/**
 * クライアントかサーバーか関係なくレスポンスを返却できます。
 * @note toResponseを呼び出すことでレスポンスを返却します。
 * @returns {Promise<IDataResponse>}
 */
export class DataResponse {
    constructor(
        public data: any = {},
        public message: string = '',
        public error: boolean,
        public status: ResponseStatus,
    ) {}

    public async toResponse(): Promise<IDataResponse> {
        'use server';
        return {
            data: this.data || {},
            message: this.message || '',
            error: this.error,
            status: this.status,
        };
    }
}
