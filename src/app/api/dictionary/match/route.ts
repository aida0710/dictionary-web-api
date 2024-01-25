import matchSearch from '@/backend/search/MatchSearch';
import {IDataResponse} from '@/backend/response/IDataResponse';

/**
 * @api {get} /api/dictionary/match
 * @description 一致検索を行う。urlのクエリパラメータにkeywordを指定する。?keyword=検索キーワード
 * @param req
 * @constructor
 */
export async function GET(req: Request): Promise<Response> {
    const keyword: string = req.url.split('?')[1].split('=')[1];
    const response: IDataResponse = await matchSearch(keyword);
    return Response.json(response.data, {status: response.status});
}