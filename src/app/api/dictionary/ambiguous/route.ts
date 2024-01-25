import {IDataResponse} from '@/backend/response/IDataResponse';
import ambiguousSearch from '@/backend/search/AmbiguousSearch';

/**
 * @api {get} /api/dictionary/ambiguous
 * @description 曖昧検索を行う。urlのクエリパラメータにkeywordを指定する。?keyword=検索キーワード
 * @param req
 * @constructor
 */
export async function GET(req: Request): Promise<Response> {
    const keyword: string = req.url.split('?')[1].split('=')[1];
    const response: IDataResponse = await ambiguousSearch(keyword);
    return Response.json(response.data, {status: response.status});
}