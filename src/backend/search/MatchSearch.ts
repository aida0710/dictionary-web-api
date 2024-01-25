'use server';

import {SQLiteConnection} from '@/backend/SQLiteConnection';
import {Database} from 'sqlite';
import {DataResponse} from '@/backend/response/DataResponse';
import {ResponseStatus} from '@/backend/response/ResponseStatus';
import {IDataResponse} from '@/backend/response/IDataResponse';

/**
 * @description 一致検索を行う。
 */
export default async function matchSearch(keyword: string): Promise<IDataResponse> {
    try {
        const DictionaryDataBase: Database = await new SQLiteConnection().getDatabase();
        const query: string = `SELECT *
                               FROM items
                               WHERE word = '${keyword}'`;
        const response: any = await DictionaryDataBase.all(query);
        return new DataResponse(
            response,
            '検索が正常に完了しました。',
            false,
            ResponseStatus.SUCCESS,
        ).toResponse();
    } catch (e) {
        console.error(e);
        return new DataResponse(
            null,
            '検索に失敗しました。',
            true,
            ResponseStatus.INTERNAL_SERVER_ERROR,
        ).toResponse();
    }
}